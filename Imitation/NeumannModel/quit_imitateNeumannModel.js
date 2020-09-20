(function () {

    // 模拟冯诺依曼模型
    let imitate = {

        start: function () {

            // 设置总线宽度
            this.modules.inputDevice.input(1);
            this.modules.inputDevice.input('/');
            this.modules.inputDevice.input(8);

            this.modules.controlUnit.init();
            console.log('1 + 8 = ' + this.modules.arithmeticLogicUnit.status[2]);
        },

        modules: {

            // 内存
            memory: {

                index: 0,
                deviceId: 1,
                matrix: [],

                read() {
                    while (this.deviceId !== imitate.modules.busArbiter.arbitrationPriority('dataBus', this.deviceId)) {
                    }
                    return this.matrix[this.index++];
                },

                write(c) {
                    while (this.deviceId !== imitate.modules.busArbiter.arbitrationPriority('dataBus', this.deviceId)) {
                    }
                    this.matrix[this.index++] = c;
                },
            },

            // 中央控制器
            cpu: {

                deviceId: 2,

                // 控制单元CU
                controlUnit: {

                    // 系统内设的指令
                    instructions: ['+', '-', '*', '/'],

                    // 信号组
                    signals: {
                        READ: 1,
                        WRITE: 2,
                        FIND: 3,
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

                    // 发射信号至运算器
                    emitAluSignal() {
                        imitate.modules.cpu.arithmeticLogicUnit.calculate();
                    },

                    // 发送信号至内存
                    emitMemorySignal(signal, c) {

                        if (this.signals.READ === signal) {
                            let c = imitate.modules.memory.read();
                            if (this.isInstruction(c)) {
                                imitate.modules.cpu.arithmeticLogicUnit.store('op', c);
                            } else {
                                imitate.modules.cpu.arithmeticLogicUnit.store('status', c);
                            }
                        } else if (this.signals.WRITE === signal) {
                            imitate.modules.memory.write(c);
                        } else {
                            imitate.modules.memory.index = c;
                        }
                    },

                    // 发射信号至输出设备
                    emitOutput() {
                        imitate.modules.outputDevice.output();
                    }
                },

                // 运算单元ALU
                arithmeticLogicUnit: {

                    // 状态数据
                    register: [],

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
            },

            // 输入设备
            inputDevice: {

                deviceId: 3,

                queue: [],

                input(c) {
                    this.queue.push(c);
                }
            },

            // 输出设备
            outputDevice: {
                deviceId: 4,
                queue: [],
                output() {

                }
            },

            // 总线仲裁器
            busArbiter: {

                busy: {
                    // 正在占用总线的设备ID, 0表示无占用
                    dataBus: [],
                    addressBus: [],
                    controlBus: [],
                },

                // 数据总线
                dataBus: [],

                // 地址总线
                addressBus: [],

                // 控制总线
                controlBus: [],

                // 优先仲裁
                arbitrationPriority(busType, deviceId) {

                    // 根据优先算法返回当前可用的设备ID
                    this.busy[busType].push(deviceId);
                    return this.busy[busType][0];
                },
            }
        }
    };

    imitate.start();
})();