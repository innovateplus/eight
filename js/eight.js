var you=[1,1,1,1,1,1,1,1,1,1],pc=[1,1,1,1,1,1,1,1,1,1];
var you2=[1,1,1,1,1,1,1,1,1,1],pc2=[1,1,1,1,1,1,1,1,1,1];
var you3=[1,1,1,1,1,1,1,1,1,1],pc3=[1,1,1,1,1,1,1,1,1,1];
var yy=0,pp=0,nn=0,rd=1,ww=1;
var pcpan=[0,0,0,0,0,0,0,0,0,0];
var pcpan88=[0,0,0,0,0,0,0,0,0,0];
var pcpan11=[0,0,0,0,0,0,0,0,0,0];
var pcpancount=0,pcpancount88=0,pcpancount11=0;
var i=0;
    
function p1()
{
    if(over==1)return;
	document.getElementById("pcl").className = "btn btn-success";
    document.getElementById("pcr").className = "btn btn-dark";
    pp=1;okreset();
}

function p2()
{
    if(over==1)return;
	document.getElementById("pcr").className = "btn btn-success";
    document.getElementById("pcl").className = "btn btn-dark";
    pp=2;okreset();
}

function pl()
{
    if(over==1)return;
	document.getElementById("plus").className = "btn btn-success";
    document.getElementById("time").className = "btn btn-dark";
    nn=1;okreset();
}

function ti()
{
    if(over==1)return;
	document.getElementById("time").className = "btn btn-success";
    document.getElementById("plus").className = "btn btn-dark";
    nn=2;okreset();
}

function y1()
{
    if(over==1)return;
	document.getElementById("youl").className = "btn btn-success";
    document.getElementById("your").className = "btn btn-dark";
    yy=1;okreset();
}

function y2()
{
    if(over==1)return;
	document.getElementById("your").className = "btn btn-success";
    document.getElementById("youl").className = "btn btn-dark";
    yy=2;okreset();
}
function copy(cp)
{
    if(cp==1)
    {
        you2[1]=you[1];
        you2[2]=you[2];
        pc2[1]=pc[1];
        pc2[2]=pc[2];
    }
    else if(cp==2)
    {
        you3[1]=you2[1];
        you3[2]=you2[2];
        pc3[1]=pc2[1];
        pc3[2]=pc2[2];
    }
    return 0;
}
function do1(d1)
{
    if(d1==1)pc[1]=pc[1]+you[1];
    else if(d1==2)pc[1]=pc[1]+you[2];
    else if(d1==3)pc[2]=pc[2]+you[1];
    else if(d1==4)pc[2]=pc[2]+you[2];
    else if(d1==5)pc[1]=pc[1]*you[1];
    else if(d1==6)pc[1]=pc[1]*you[2];
    else if(d1==7)pc[2]=pc[2]*you[1];
    else     pc[2]=pc[2]*you[2];
    if(pc[1]>9) pc[1]=pc[1]%10;
    if(pc[1]==0) pc[1]=1;
    if(pc[2]>9) pc[2]=pc[2]%10;
    if(pc[2]==0) pc[2]=1;
//tip4pc
    if(d1==1) {yy=1;pp=1;nn=1;}
    else if(d1==2){yy=2;pp=1;nn=1;}
    else if(d1==3){yy=1;pp=2;nn=1;}
    else if(d1==4){yy=2;pp=2;nn=1;}
    else if(d1==5){yy=1;pp=1;nn=2;}
    else if(d1==6){yy=2;pp=1;nn=2;}
    else if(d1==7){yy=1;pp=2;nn=2;}
    else     {yy=2;pp=2;nn=2;}
    document.getElementById("pcltip").innerHTML = (nn==1)?"+"+String(you[yy]):"×"+String(you[yy]);
    document.getElementById("pcrtip").innerHTML = (nn==1)?"+"+String(you[yy]):"×"+String(you[yy]);
    document.getElementById("pcltip").style.opacity = "0";
    document.getElementById("pcrtip").style.opacity = "0";
    if(pp==1)document.getElementById("pcltip").style.opacity = "0.8";
    if(pp==2)document.getElementById("pcrtip").style.opacity = "0.8";

    return 0;
}
function do2(d2)
{
    if(d2==1)pc2[1]=pc2[1]+you2[1];
    else if(d2==2)pc2[1]=pc2[1]+you2[2];
    else if(d2==3)pc2[2]=pc2[2]+you2[1];
    else if(d2==4)pc2[2]=pc2[2]+you2[2];
    else if(d2==5)pc2[1]=pc2[1]*you2[1];
    else if(d2==6)pc2[1]=pc2[1]*you2[2];
    else if(d2==7)pc2[2]=pc2[2]*you2[1];
    else     pc2[2]=pc2[2]*you2[2];
    if(pc2[1]>9) pc2[1]=pc2[1]%10;
    if(pc2[1]==0) pc2[1]=1;
    if(pc2[2]>9) pc2[2]=pc2[2]%10;
    if(pc2[2]==0) pc2[2]=1;
    return 0;
}
function do3(d3)
{
    if(d3==1)you3[1]=you3[1]+pc3[1];
    else if(d3==2)you3[1]=you3[1]+pc3[2];
    else if(d3==3)you3[2]=you3[2]+pc3[1];
    else if(d3==4)you3[2]=you3[2]+pc3[2];
    else if(d3==5)you3[1]=you3[1]*pc3[1];
    else if(d3==6)you3[1]=you3[1]*pc3[2];
    else if(d3==7)you3[2]=you3[2]*pc3[1];
    else     you3[2]=you3[2]*pc3[2];
    if(you3[1]>9) you3[1]=you3[1]%10;
    if(you3[1]==0) you3[1]=1;
    if(you3[2]>9) you3[2]=you3[2]%10;
    if(you3[2]==0) you3[2]=1;
    return 0;
}


function yanyou()
{
    if(nn==1)
    {
        ww=you[yy]+pc[pp];
        if(ww>9) ww=ww%10;//大于9取个位
        if(ww==0) ww=1;//0取1
    }
    else if(nn==2)
    {
        ww=you[yy]*pc[pp];
        if(ww>9) ww=ww%10;
        if(ww==0) ww=1;
    }

    if(ww==you[yy])return 1;else return 0;
}

function yanpc()
{
    if(pc[1]==pc2[1]&&pc[2]==pc2[2])return 1;else return 0;
}
function clpcp()
{
    pcpan[1]=0;pcpan[2]=0;pcpan[3]=0;pcpan[4]=0;pcpan[5]=0;
    pcpan[6]=0;pcpan[7]=0;pcpan[8]=0;pcpan[9]=0;pcpan[0]=0;
    pcpan88[1]=0;pcpan88[2]=0;pcpan88[3]=0;pcpan88[4]=0;pcpan88[5]=0;
    pcpan88[6]=0;pcpan88[7]=0;pcpan88[8]=0;pcpan88[9]=0;pcpan88[0]=0;
    pcpan11[1]=0;pcpan11[2]=0;pcpan11[3]=0;pcpan11[4]=0;pcpan11[5]=0;
    pcpan11[6]=0;pcpan11[7]=0;pcpan11[8]=0;pcpan11[9]=0;pcpan11[0]=0;
    pcpancount=0;pcpancount88=0;pcpancount11=0;
    return 0;
}

function btnreset()
{
    document.getElementById("pcr").className = "btn btn-dark";
    document.getElementById("pcl").className = "btn btn-dark";
    document.getElementById("plus").className = "btn btn-dark";
    document.getElementById("time").className = "btn btn-dark";
    document.getElementById("your").className = "btn btn-dark";
    document.getElementById("youl").className = "btn btn-dark";

}
function okreset()
{
    if(yy==0||pp==0||nn==0)
    {
        document.getElementById("ok").className = "btn btn-dark";return;
    }
    else if(yanyou()==1)
    {
        document.getElementById("ok").className = "btn btn-dark";return;
    }
    document.getElementById("ok").className = "btn btn-success";
}
okreset();btnreset();
function pcfirst()
{
    pc[1]=2;
    document.getElementById("pcl").innerHTML = pc[1];
    document.getElementById("pcf").style.display = "none";
    document.getElementById("pcltip").innerHTML = "+1";
    document.getElementById("pcltip").style.opacity = "0.8";
    document.getElementById("pcrtip").style.opacity = "0";
}
var step=0,panding=0,doit=0,doit2=0,over=0;
function zok()
{
    if(over==1)
    {
        yy=0;pp=0;nn=0;
            you[1]=1;
            pc[1]=1;
            you[2]=1;
            pc[2]=1;
            document.getElementById("youl").innerHTML = you[1];
			document.getElementById("your").innerHTML = you[2];
			document.getElementById("pcl").innerHTML = pc[1];
			document.getElementById("pcr").innerHTML = pc[2];
            rd=1;
            document.getElementById("round").innerHTML = rd;
            document.getElementById("okimg").src="image/ok.svg";
            over=0;okreset();btnreset();
            document.getElementById("pcf").style.display = "block";


        document.getElementById("pcltip").style.opacity = "0";
        document.getElementById("pcrtip").style.opacity = "0";
        document.getElementById("youltip").style.opacity = "0";
        document.getElementById("yourtip").style.opacity = "0";

            return;
    }

    if(yy==0||pp==0||nn==0)
    {
        return;
    }
    else
    {
        if(yanyou()==1)
        {
            return;
        }
        rd++;
        document.getElementById("pcf").style.display = "none";
        document.getElementById("round").innerHTML = rd;
            if(nn==1)
            {
                you[yy]=you[yy]+pc[pp];
                if(you[yy]>9) you[yy]=you[yy]%10;//大于9取个位
                if(you[yy]==0) you[yy]=1;//0取1
            }
            else if(nn==2)
            {
                you[yy]=you[yy]*pc[pp];
                if(you[yy]>9) you[yy]=you[yy]%10;
                if(you[yy]==0) you[yy]=1;
            }

        document.getElementById("youltip").innerHTML = (nn==1)?"+"+String(pc[pp]):"×"+String(pc[pp]);
        document.getElementById("yourtip").innerHTML = (nn==1)?"+"+String(pc[pp]):"×"+String(pc[pp]);
        document.getElementById("youltip").style.opacity = "0";
        document.getElementById("yourtip").style.opacity = "0";
        if(yy==1)document.getElementById("youltip").style.opacity = "0.8";
        if(yy==2)document.getElementById("yourtip").style.opacity = "0.8";
        document.getElementById("youl").innerHTML = you[1];
        document.getElementById("your").innerHTML = you[2];
            btnreset();okreset();
        yy=0;pp=0;nn=0;
        if(you[1]==8&&you[2]==8)
        {
            document.getElementById("your").className = "btn btn-primary";
            document.getElementById("youl").className = "btn btn-primary";
            document.getElementById("ok").className = "btn btn-primary";
            document.getElementById("okimg").src="image/restart.svg";over=1;
            return;
        }
        
        //电脑操作/////////////////////////////////
        //step1:验证下一步是否能赢？
        step=0;
        for(i=1;i<=8;i++)
        {
            copy(1);
            do2(i);
            if(pc2[1]==8&&pc2[2]==8)
            {
                do1(i);step=1;
                break;
            }
        }
        clpcp();
        //step2:验证下一步是否不输？
        if(step==0)
        {
            for(i=1;i<=8;i++)
            {
                copy(1);
                do2(i);
                panding=0;
                if(pc2[1]==8||pc2[2]==8)
                {
                    panding=88;
                }
                else if(pc2[1]==pc2[2])
                {
                    panding=11;
                }
                if(yanpc()==1)panding=1;
                for(m=1;m<=8;m++)
                {
                    copy(2);
                    do3(m);
                    if(you3[1]==8&&you3[2]==8)
                    {
                        panding=1;
                    }
                    
                }
                if(panding==0)
                {
                    pcpancount++;pcpan[pcpancount]=i;
                }
                else if(panding==88)
                {
                    pcpancount88++;pcpan88[pcpancount88]=i;
                }
                else if(panding==11)
                {
                    pcpancount11++;pcpan11[pcpancount11]=i;
                }

            }
            if(pcpancount88>0)
            {
                doit=Math.floor(Math.random()*pcpancount88)+1;
                do1(pcpan88[doit]);step=1;
            }  
            else if(pcpancount>0)
            {
                doit=Math.floor(Math.random()*pcpancount)+1;
                do1(pcpan[doit]);step=1;
            }  
            else if(pcpancount11>0)
            {
                doit=Math.floor(Math.random()*pcpancount11)+1;
                do1(pcpan11[doit]);step=1;
            }         
        }
        //step3:输了，乱走一步。
        if(step==0)
        {
            for(i=1;i<=8;i++)
            {
                copy(1);
                do2(i);
                panding=0;
                if(yanpc()==1)panding=1;
                if(panding==0)
                {
                    do1(i);step=1;
                    break;
                }
            }
        }
        yy=0;pp=0;nn=0;
			document.getElementById("pcl").innerHTML = pc[1];
			document.getElementById("pcr").innerHTML = pc[2];
            btnreset();okreset();
        if(pc[1]==8&&pc[2]==8)
        {
            document.getElementById("pcr").className = "btn btn-primary";
            document.getElementById("pcl").className = "btn btn-primary";
            document.getElementById("ok").className = "btn btn-primary";
            document.getElementById("okimg").src="image/restart.svg";over=1;
            return;
        }
        return;
    }
}
