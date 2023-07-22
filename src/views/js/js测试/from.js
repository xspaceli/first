// 我在搜索百度代码做案例时，发现大部分是js代码，可我用的是ts技术栈，因此ts接口编写十分复杂，会违背我测试可用代码的初衷；于是我另外再ts项目中做了js文件夹，但是当我把代码复制进去，并尝试在js文件导出模块时。却无法找到路径
// 因此在这里用js导出模块，却用tsx导入是错误的
// 这是因为 JSX 会被编译成 React.createElement 方法调用,所以 JSX 文件中使用的所有标签都必须提前定义好对应的 React 组件。
// 如果在 JSX 中直接使用普通的 JavaScript 对象或函数,会报错“JSX element type does not have any construct or call signatures”,就是说 JSX 不认识这个标签。
// 因此下面测试案例无效，只能通过另外启动js项目来进行测试学习
import {Component} from 'react';

class from1 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'React表单',
            name:'',
            sex:'1',
            cty:'',
            info:'', 
            citys:[
                '北京','上海','深圳'
            ],
            hobby:[
                {
                    title:'睡觉',
                    'checked':true
                },
                {
                    title:'打游戏',
                    'checked':false
                },
                {
                    title:'旅游',
                    'checked':true
                }
            ]
         };
    }
    handelSubmit=(e)=>{
        // 一点提交就会刷新，阻止submit事件
       e.preventDefault();
       console.log(this.state.name,this.state.sex,this.state.cty,this.state.hobby,this.state.info );
    }
    handelName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handelSex=(e)=>{
       this.setState({
           sex:e.target.value
       })
    }
    oncity=(e)=>{
        this.setState({
           cty:e.target.value
        })
    }
    handelChecked=(key)=>{
       var hobby = this.state.hobby;
       hobby[key].checked = !hobby[key].checked;

        this.setState({
          hobby:hobby

        })
    }
    handelinfo=() =>{
        this.setState({
            info:this.refs.info.value
        })
    }
    render() {
        return (
            <div>
                 <hr/>
                 <h2>{this.state.msg}</h2>
                 <form onSubmit ={this.handelSubmit}>
                       <label>用户名</label>
                       <input type="text" value={this.state.name} onChange={this.handelName}/>
                       <br/>
                       <br/>
                       <label htmlFor="性别">性别:</label>
                            <input type="radio" value='1' checked={this.state.sex ==1} onChange={this.handelSex} />男
                            <input type="radio" value='2' checked={this.state.sex ==2} onChange={this.handelSex} />女
                       <br/>
                       <label htmlFor="地址">地址:</label>
                       <select name="" value={this.state.cty} onChange={this.oncity}>
                          {
                              this.state.citys.map((item,key)=>{
                              return <option key={key}>{item}</option>
                              })
                          }
                       </select>
                       <br/>
                       <label htmlFor="爱好">爱好:</label>
                       {
                           this.state.hobby.map((item,key)=>{
                               return(
                                   <span key={key}>
                                       <input type="checkbox" checked={item.checked} onChange={this.handelChecked.bind(this,key)}/>
                                       <label htmlFor="">{item.title}</label>
                                   </span>
                               )
                           })
                       }
                       <textarea name="" ref='info' value={this.state.info} onChange={this.handelinfo} cols="30" rows="10"></textarea>
                       <br/>
                       <br/>
                       <input type="submit" value="提交"/>
                 </form>
            </div>
        );
    }
}

export default from1;
