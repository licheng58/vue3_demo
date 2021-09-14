
import Mock from "mockjs"
const navs = () => [
  { id: 1, imgSrc: 'images/nav_1.png', title: '新风超市' },
  { id: 2, imgSrc: 'images/nav_2.png', title: '新风服饰' },
  { id: 3, imgSrc: 'images/nav_3.png', title: '全球购' },
  { id: 4, imgSrc: 'images/nav_4.png', title: '新风生鲜' },
  { id: 5, imgSrc: 'images/nav_5.png', title: '新风到家' },
  { id: 6, imgSrc: 'images/nav_6.png', title: '充值缴费' },
  { id: 7, imgSrc: 'images/nav_7.png', title: '9.9元拼' },
  { id: 8, imgSrc: 'images/nav_8.png', title: '领券' },
  { id: 9, imgSrc: 'images/nav_9.png', title: '省钱' },
  { id: 10, imgSrc: 'images/nav_10.png', title: '全部' },
]

const pros = ()=>
  [
    {
      id: 1,
      title: 'HUAWEI Mate 40 Pro 全网通 12G 手机全新上线 哈哈哈哈哈哈哈哈哈',
      price: '1999',
      imgSrc: 'images/pro.png',
    },
    {
      id: 2,
      title: 'HUAWEI Mate 40 Pro 全网通 12G 手机全新上线 哈哈哈哈哈哈哈哈哈',
      price: '2999',
      imgSrc: 'images/pro.png',
    },
    {
      id: 3,
      title: 'HUAWEI Mate 40 Pro 全网通 12G 手机全新上线 哈哈哈哈哈哈哈哈哈',
      price: '3999',
      imgSrc: 'images/pro.png',
    },
    {
      id: 4,
      title: 'HUAWEI Mate 40 Pro 全网通 12G 手机全新上线 哈哈哈哈哈哈哈哈哈',
      price: '4999',
      imgSrc: 'images/pro.png',
    },
    {
      id: 5,
      title: 'HUAWEI Mate 40 Pro 全网通 12G 手机全新上线 哈哈哈哈哈哈哈哈哈',
      price: '5999',
      imgSrc: 'images/pro.png',
    },
    {
      id: 6,
      title: 'HUAWEI Mate 40 Pro 全网通 12G 手机全新上线 哈哈哈哈哈哈哈哈哈',
      price: '6999',
      imgSrc: 'images/pro.png',
    },
    {
      id: 7,
      title: 'HUAWEI Mate 40 Pro 全网通 12G 手机全新上线 哈哈哈哈哈哈哈哈哈',
      price: '7999',
      imgSrc: 'images/pro.png',
    },
    {
      id: 8,
      title: 'HUAWEI Mate 40 Pro 全网通 12G 手机全新上线 哈哈哈哈哈哈哈哈哈',
      price: '8999',
      imgSrc: 'images/pro.png',
    },
    {
      id: 9,
      title: 'HUAWEI Mate 40 Pro 全网通 12G 手机全新上线 哈哈哈哈哈哈哈哈哈',
      price: '8999',
      imgSrc: 'images/pro.png',
    },
  ]


const images = ()=>[
  'https://img01.yzcdn.cn/vant/apple-1.jpg',
  'https://img01.yzcdn.cn/vant/apple-2.jpg',
]

const sidebar = ()=> [
  {id:1,sideTitle:'女装 男装',
  bodyItems:[
    {id:1,name:'生活电器'},
    {id:2,name:'wer'},
    {id:3,name:'厨房电器'},
    {id:4,name:'扫地机器人'},
    {id:5,name:'吸尘器'},
    {id:6,name:'取暖器'},
    {id:7,name:'豆浆机'},
    {id:8,name:'取暖机'},
    {id:9,name:'加湿器'},
    {id:10,name:'蓝牙音响'},
    {id:11,name:'烤箱'},
    {id:12,name:'卷发器'},
    {id:13,name:'空气净化器'},
  ]},
  {id:2,sideTitle:'家具 家私',
  bodyItems:[
    {id:1,name:'生活电器'},
    {id:2,name:'wer'},
    {id:3,name:'厨房电器'},
    {id:4,name:'扫地机器人'},
    {id:5,name:'吸尘器'},
    {id:6,name:'取暖器'},
    {id:7,name:'豆浆机'},
    
  ]},
  {id:3,sideTitle:'运动 户外',
  bodyItems:[
    {id:1,name:'生活电器'},
    {id:2,name:'wer'},
    {id:3,name:'厨房电器'},
    {id:4,name:'扫地机器人'},
    {id:5,name:'吸尘器'},
    {id:6,name:'取暖器'},
    {id:7,name:'豆浆机'},
    
  ]},
  {id:4,sideTitle:'游戏 动漫',
  bodyItems:[
    {id:1,name:'生活电器'},
    {id:2,name:'wer'},
    {id:3,name:'厨房电器'},
    {id:4,name:'扫地机器人'},
    {id:5,name:'吸尘器'},
    {id:6,name:'取暖器'},
    {id:7,name:'豆浆机'},
    
  ]},
  {id:5,sideTitle:'美妆 清洁',
  bodyItems:[
    {id:1,name:'生活电器'},
    {id:2,name:'wer'},
    {id:3,name:'厨房电器'},
    {id:4,name:'扫地机器人'},
    {id:5,name:'吸尘器'},
    {id:6,name:'取暖器'},
    {id:7,name:'豆浆机'},
    
  ]},
  {id:6,sideTitle:'工具 装修',
  bodyItems:[
    {id:1,name:'生活电器'},
    {id:2,name:'wer'},
    {id:3,name:'厨房电器'},
    {id:4,name:'扫地机器人'},
    {id:5,name:'吸尘器'},
    {id:6,name:'取暖器'},
    {id:7,name:'豆浆机'},
    
  ]},
  {id:7,sideTitle:'鞋靴 箱包',
  bodyItems:[
    {id:1,name:'生活电器'},
    {id:2,name:'wer'},
    {id:3,name:'厨房电器'},
    {id:4,name:'扫地机器人'},
    {id:5,name:'吸尘器'},
    {id:6,name:'取暖器'},
    {id:7,name:'豆浆机'},
    
  ]},
  {id:8,sideTitle:'玩具 孕产',
  bodyItems:[
    {id:1,name:'生活电器'},
    {id:2,name:'wer'},
    {id:3,name:'厨房电器'},
    {id:4,name:'扫地机器人'},
    {id:5,name:'吸尘器'},
    {id:6,name:'取暖器'},
    {id:7,name:'豆浆机'},
    
  ]},
    ]

 const proList = ()=>[
    {
      id:1,
      barName:'推荐',
      barItem:[
        {id:1,name:'无量倒计时的借口很快就爱上打卡机山东科技撒谎的卡活动卡时间段和空间啊',price:'888'},
        {id:2,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:3,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:4,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:5,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:6,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:7,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:8,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:9,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:10,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:11,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:12,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:13,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:14,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
      ]
    },

    {
      id:2,
      barName:'新品',
      barItem:[
        {id:1,name:'无量倒计时的借口很快就爱上打卡机山东科技撒谎的卡活动卡时间段和空间啊',price:'888'},
        {id:2,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:3,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:4,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:5,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:6,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:7,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:8,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:9,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:10,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:11,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:12,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:13,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:14,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
      ]
    },

    {
      id:3,
      barName:'价格',
      barItem:[
        {id:1,name:'无量倒计时的借口很快就爱上打卡机山东科技撒谎的卡活动卡时间段和空间啊',price:'888'},
        {id:2,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:3,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:4,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:5,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:6,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:7,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:8,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:9,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:10,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:11,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:12,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:13,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
        {id:14,name:'会计考试的经济上的快结婚登记卡上的就是登记卡技术大几十块的',price:'666'},
      ]
    }
    ]
// Mock.mock(url,method,chartData) 三个参数对应 api地址、请求方式、数据源
Mock.mock("/getNavs",'get',navs) 
Mock.mock("/getPros",'get',pros) 
Mock.mock("/getImages",'get',images) 
Mock.mock("/getSideBar",'get',sidebar) 
Mock.mock("/getProList",'get',proList) 

