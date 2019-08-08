using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Threading;

namespace FlyBird
{
    public partial class Form2 : Form
    {


        public Form2()
        {
            InitializeComponent();
        }

        private void Form2_Load(object sender, EventArgs e)
        {

            this.start(sender, e);
        }

        // 游戏开始
        private int gameProcessing = 0; // 游戏进度，0：未开始，1：正在进行，2：已结束 
        private Form form = null;
        private PictureBox bird = null;
        private PictureBox[] pipes = new PictureBox[6];
        private void start(object sender, EventArgs e)
        {
            this.form = sender as Form;
            this.bird = this.pictureBox1;
            this.gameProcessing = 1;


            this.pipes[0] = this.pictureBox2; this.pipes[1] = this.pictureBox3;
            this.pipes[2] = this.pictureBox4; this.pipes[3] = this.pictureBox5;
            this.pipes[4] = this.pictureBox6; this.pipes[5] = this.pictureBox7;

            this.initGravityTimer();
            this.initPipesTimer();
        }


        // 开启定时器
        private void startTimer(string timer = "all")
        {
            if(timer == "gravityTimer")
            {
                this.gravityTimer.Change(0, 50);return;
            }
            else if(timer == "pipesTimer")
            {
                this.pipesTimer.Change(0, 50);return;
            }

            this.gravityTimer.Change(0, 50);
            this.pipesTimer.Change(0, 50);
        }


        // 关闭定时器
        private void clearTimer(string timer = "all")
        {
            if (timer == "gravityTimer")
            {
                this.gravityTimer.Change(-1, 50); return;
            }
            else if (timer == "pipesTimer")
            {
                this.pipesTimer.Change(-1, 50); return;
            }

            this.gravityTimer.Change(-1, 50);
            this.pipesTimer.Change(-1, 50);
        }


        // 初始化管子定时器
        private System.Threading.Timer pipesTimer;
        private void initPipesTimer()
        {
            this.pipesTimer = new System.Threading.Timer((st) => { this.pipesMove(); }, null, Timeout.Infinite, Timeout.Infinite);
            this.startTimer("pipesTimer");
        }

        // 管子移动
        private void pipesMove()
        {
            foreach( PictureBox pipe in this.pipes )
            {
                pipe.Left -= 10;

                if (pipe.Left <= -60)
                {
                    pipe.Left = 589 ;
                }
            }
        }


        // 加分
        private int score = 0;
        private void addScore()
        {

            ++this.score;
            this.label1.Text = this.score.ToString();

            if (this.score % 100 == 0)
            {
                this.switchScenes();
            }

        }

        // 场景切换
        private Boolean isDay = true;
        private void switchScenes()
        {
            this.isDay = !this.isDay;
            this.BackgroundImage = (this.isDay)?Properties.Resources.bg_day:Properties.Resources.bg_night;
        }

        // 碰撞检测
        private Boolean collisionDetection()
        {

            int index = 0;
            int[] targetIndex = { 0,2,4 }; // 上面的管子
            foreach( PictureBox pipe in this.pipes)
            {
                if ( -1 != Array.IndexOf(targetIndex, index ) && pipe.Location.X<=53 && this.bird.Location.Y +7 <= pipe.Height + pipe.Location.Y )
                {
                    // 撞到上面的管子 - 撞到头
                    return true;
                }
                else if(-1 == Array.IndexOf(targetIndex, index) && pipe.Location.X <= 53 && this.bird.Location.Y + 42 >= pipe.Location.Y )
                {
                    // 撞到下面的管子 - 撞到下巴
                    return true;
                }
                ++index;
            }

            return false;
        }


        // 初始化小鸟定时器
        private System.Threading.Timer gravityTimer;
        private void initGravityTimer()
        {
            System.Windows.Forms.Control.CheckForIllegalCrossThreadCalls = false;
            this.gravityTimer = new System.Threading.Timer((st) => { this.fly(); }, null, Timeout.Infinite, Timeout.Infinite);
            this.startTimer("gravityTimer");
        }

        // 游戏结束
        private void failed()
        {
            this.gameProcessing = 2;

            this.clearTimer();
            if (MessageBox.Show("失败了，得分："+ this.score +"分！再来一局？", "", MessageBoxButtons.OKCancel, MessageBoxIcon.Question) == DialogResult.OK)
            {
                this.gameProcessing = 0;
                this.Close();
                (new Form2()).ShowDialog();
            }
            this.Close();
        }

        // 小鸟飞行
        private void fly(string direction = "down")
        {

            if (this.collisionDetection() || this.bird.Top >= 466)
            {
                this.failed();
                return;
            }
            this.addScore();
            this.bird.Top += (direction == "down") ? 5 : -10;
            this.bird.Top = (this.bird.Top <= 0) ? 0 : this.bird.Top;
            this.bird.Top = (this.bird.Top >= 466) ? 466 : this.bird.Top;
        }

        // 当键按下时
        private void onKeyDown(object sender, KeyEventArgs e)
        {
            this.clearTimer("gravityTimer");
            if (e.KeyCode == Keys.Up){


                this.fly("up");
               
                return;
            }

            this.fly("down");
          
        }

        // 当键按起时
        private void onKeyUp(object sender, KeyEventArgs e)
        {
            this.startTimer("gravityTimer");
        }

        // 当关闭窗口的时候
        private void onFormClosing(object sender, FormClosingEventArgs e)
        {
            this.clearTimer();
            if (this.gameProcessing == 1)
            {
                if (MessageBox.Show("你确定要退出游戏吗？", "", MessageBoxButtons.OKCancel, MessageBoxIcon.Question) == DialogResult.OK)
                {
                    e.Cancel = false;
                    return;
                }

                e.Cancel = true;
                this.startTimer(); return;
            }

            e.Cancel = false;
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }
    }
}
