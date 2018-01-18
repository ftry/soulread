<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
       if(IS_POST){
        $cut = M('cut');

        //$data['demand'] = I('get.d')
        $data['x'] = I('post.x');
        $data['y'] = I('post.y');
        if(M('cut') -> add($data)){
            //$data = null;
            $this -> success('成功!');
        }else{
            //$data = null;

            $this -> error('抱歉，失败！');}
        }
        
        $this -> display();
        //$this->show('<style type="text/css">*{ padding: 0; margin: 0; } div{ padding: 4px 48px;} body{ background: #fff; font-family: "微软雅黑"; color: #333;font-size:24px} h1{ font-size: 100px; font-weight: normal; margin-bottom: 12px; } p{ line-height: 1.8em; font-size: 36px } a,a:hover{color:blue;}</style><div style="padding: 24px 48px;"> <h1>:)</h1><p>欢迎使用 <b>ThinkPHP</b>！</p><br/>版本 V{$Think.version}</div><script type="text/javascript" src="http://ad.topthink.com/Public/static/client.js"></script><thinkad id="ad_55e75dfae343f5a1"></thinkad><script type="text/javascript" src="http://tajs.qq.com/stats?sId=9347272" charset="UTF-8"></script>','utf-8');

    }

    //上传任务
   


    //截图
    public function cut()
    {
        $cut = M('cut');
        $zb = $cut -> getField('x,y',true);
        //echo $zb;
        //dump($zb);
        foreach($zb as $key => $val){
           
            //echo $key--;

            //echo $val--;


        $image = new \Think\Image(); 
        $image->open('./PUBLIC/img/1.jpg');//要用./指定文件路径，在此//怎么动起来啊
        //$width = $image->width(); // 返回图片的宽度
        //$height = $image->height(); // 返回图片的高度
        echo $width;
        echo $height;
        //将图片裁剪为400x400并保存为corp.jpg (177.3606629082426 ,262.62308673469386)
        $i=2;
        //$n=$i++;
        $image->crop(45, 45, $key ,$val )->save('./PUBLIC/img/'.$key.'.jpg'); //'./PUBLIC/img/'.$key.'.jpg'----->非常重要的一个连接符号点"."//-> saveName('time');//./PUBLIC/img/crop.jpg
        //$image->crop(45, 45, 189 ,334 )->save('./PUBLIC/img/tt.jpg');
     }
        $this -> display();
    }
    //提交正确答案
    public function inp(Type $var = null)
    {
        # code...
        $ans = M('ans');
        if(IS_POST){
            
            $data['num'] = I('post.num');
            $data['an'] = I('post.an');
            
            if(M('ans') -> add($data)){
                $data = null;
                $this -> success('发布成功!');
            }else{
                $data = null;
    
                $this -> error('抱歉，发布失败！');
    
            }
            }else{
                
                $this -> display();
    
            }
     

    }
    
    //提交学生的答案
    public function inpu(Type $var = null)
    {
        # code...
        $ans = M('uans');
        if(IS_POST){
            
            $data['num'] = I('post.num');
            $data['an'] = I('post.an');
            
            if(M('uans') -> add($data)){
                $data = null;
                $this -> success('发布成功!');
            }else{
                $data = null;
    
                $this -> error('抱歉，发布失败！');
    
            }
            }else{
                
                $this -> display();
    
            }
    }
    
    //判定答案的正确和得分
    public function judged()
    {
        # code...
        /*$ans = M('ans');
        $list = $ans -> getField('an',true);

        $ans = M('uans');
        $list1 = $ans -> getField('an',true);

        foreach($list as $val){
           // $val == $list1 as $val1 
        }*/
 
        $ans = M('ans');
        $list = $ans -> getField('an',true);
        //echo "$list";
        //foreach($list as $a){
            //echo $a;
        //}
        //echo "$a";
        //$this -> assign('list' , $list);
        
               

        $ans = M('uans');
        $list1 = $ans -> getField('an',true);
        //echo "$list1";
        //$Model = new Model() // 实例化一个model对象 没有对应任何数据表
        //$Model->query("select * from think_uans where an as $a");
        $c = array_diff($list, $list1); 
        foreach($c as $v){
        echo $v;}


        //foreach($list1 as $b){
            //echo $b;
        
        //echo "$b";
        //$this -> assign('list1' , $list1);
        //if($b = $a){
           // echo $a;
            //$this -> assign('a' , $a);
        //}

        //$sql = M('ans')
        
        //$map['id']  = array('eq',100);
        
        //$sql->where($map)->where('user_id = user.user_id')->$sql;
      //}
        //$this -> display();
 
        //if($list == $list1){
          //  echo "good";
        //}




         

  }
}