(function () {

    // 模拟图灵机
    let imitate = {

        start: function () {

            this.modules.paperTape.input(1);
            this.modules.paperTape.input('/');
            this.modules.paperTape.input(8);
            this.modules.controlUnit.init();
            console.log('1 + 8 = ' + this.modules.arithmeticLogicUnit.status[2]);
        },

        modules: {

            // 穿孔纸带
            paperTape: {

                // 顺序排列的单元格
                cells: [],

                input(c) {
                    this.cells.push(c);
                }
            },

            // 控制单元CU
            controlUnit: {

                // 系统内设的指令
                instructions: ['+', '-', '*', '/'],

                // 信号组
                signals: {
                    READ: 1,
                    WRITE: 2
                },

                // 从穿孔纸带读出的内容是数据还是指令
                isInstruction(c) {
                    return this.instructions.indexOf(c) >= 0;
                },

                // 启动
                init() {

                    this.emitInputSignal(this.signals.READ);
                    this.emitInputSignal(this.signals.READ);
                    this.emitInputSignal(this.signals.READ);
                    this.emitAluSignal();
                    this.emitInputSignal(this.signals.WRITE);
                },

                // 发射信号至读写头
                emitInputSignal(signal, c) {
                    if (1 === signal) {
                        let c = imitate.modules.readWriteHead.read();
                        if (this.isInstruction(c)) {
                            imitate.modules.arithmeticLogicUnit.store('op', c);
                        } else {
                            imitate.modules.arithmeticLogicUnit.store('status', c);
                        }
                    } else {
                        imitate.modules.readWriteHead.write(c);
                    }
                },

                // 发射信号至运算器
                emitAluSignal() {
                    imitate.modules.arithmeticLogicUnit.calculate();
                },
            },

            // 读写头
            readWriteHead: {

                // 当前读到的纸带格子序号
                index: 0,

                read() {
                    return imitate.modules.paperTape.cells[this.index++];
                },

                write(c) {
                    imitate.modules.paperTape.cells[this.index++] = c;
                },
            },

            // 运算单元ALU
            arithmeticLogicUnit: {

                // 状态数据
                status: [],

                // 运算数据
                ops: [],

                store(type, c) {
                    if ('op' === type) {
                        this.ops.push(c);
                    } else {
                        this.status.push(c);
                    }
                },

                calculate() {
                    let result;
                    let status1 = this.status[0];
                    let status2 = this.status[1];
                    switch (this.ops[0]) {
                        case '+' :
                            result = status1 + status2;
                            break;
                        case '-' :
                            result = status1 - status2;
                            break;
                        case '*' :
                            result = status1 * status2;
                            break;
                        case '/' :
                            result = status1 / status2;
                            break;
                        default:
                            throw {'msg': 'Calculate UnException'};
                    }

                    this.status[2] = result;
                }
            },
        }
    };

    imitate.start();
})();