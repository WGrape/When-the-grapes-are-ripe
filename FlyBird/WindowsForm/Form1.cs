using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace FlyBird
{
    public partial class Form1 : Form
    {

        public static Form window = null;

        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

            Form1.window = sender as Form;
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void buttonStart_Click(object sender, EventArgs e)
        {

            // MessageBox.Show( this.window.Text );
            // this.window.BackgroundImage = null;
            // this.window.BackColor = Color.Red;
            // Application.Exit(); 退出所有的窗口程序
            //this.Close(); // 关闭当前的窗口
            // Application.Run(new Form2());
            (new Form2()).ShowDialog();
        }

        private void buttonStart_Hover(object sender, EventArgs e)
        {
            Button button = sender as Button;
            button.Cursor = Cursors.Hand;
        }

        private void label2_Click(object sender, EventArgs e)
        {

        }
    }
}
