import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  let price =30000
 
  return (
    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x />
      <Window title={"⫷ آمار لحظه ای دلار/ Current dollar statisticse ⫸"} style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)" }}>
      
      
      <br-xx/>


       <div style={{width:"100%",height:50,backgroundColor:"#00DDFF", borderRadius:100,
        textAlign:"center"
       }}>
        <br-x/>
        <br-xx/>
        <br-xx/>
        قیمت لحظه ای:{(props.p.price as number).toLocaleString("fa-ir")}
      </div>
      
      <br-xx/>

      <div style={{width:"100%",height:50,backgroundColor:"#26E2FF", borderRadius:100,
        textAlign:"center"
       }}>
        <br-x/>
        <br-xx/>
        <br-xx/>
        تغییرات روزانه:٪{Number(props.p.diff24d as number).toLocaleString("fa-ir")}
      </div>

      <br-xx/>

      <div style={{width:"100%",height:50,backgroundColor:"#5EE4F9", borderRadius:100,
        textAlign:"center"
       }}>
        <br-x/>
        <br-xx/>
        <br-xx/>
        تغییرات هفتگی:٪{Number(props.p.diff7d as number).toLocaleString("fa-ir")}
      </div>

      <br-xx/>

      <div style={{width:"100%",height:50,backgroundColor:"#81e5f5", borderRadius:100,
        textAlign:"center"
       }}>
        <br-x/>
        <br-xx/>
        <br-xx/>
        تغییرات ماهانه:٪{Number(props.p.diff30d as number).toLocaleString("fa-ir")}
      </div>

      <br-xx/>
       <br-x/>
       <br-x/>
       
       
      <center>
      تورینگ تیم 
      <br-xx/>
       بلک بند 
      </center>

     <br-x/>
     <br-x/>
     <br-x/>
 
     <div style={{width:"100%",height:50,backgroundColor:"#FF00A2", borderRadius:100,
        textAlign:"center"
       }}>
        <br-x/>
        <br-xx/>
        <br-xx/>
        Current price:{props.p.price}
      </div>
   
      <br-xx/>

      <div style={{width:"100%",height:50,backgroundColor:"#FB2FB0", borderRadius:100,
        textAlign:"center"
       }}>
        <br-x/>
        <br-xx/>
        <br-xx/>
        Daily changes:{props.p.diff24d}%
      </div>


    <br-xx/>

      <div style={{width:"100%",height:50,backgroundColor:"#FA50BC", borderRadius:100,
        textAlign:"center"
       }}>

        <br-x/>
        <br-xx/>
        <br-xx/>

        Weekly changes:{(props.p.diff7d)}%
      </div>

      <br-xx/>

      <div style={{width:"100%",height:50,backgroundColor:"#FC69C6", borderRadius:100,
        textAlign:"center"
       }}>

        <br-x/>
        <br-xx/>
        <br-xx/>

        Monthly changes:{(props.p.diff30d)}%
      </div>

      <br-xx/>

      <center>
      ƬƲƦƖƝƓ ƬЄƛጠ 
      <br-xx/>
      black band
     
      </center>


      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

    let res = await fetch("https://api.tetherland.com/currencies")
    let data = await res.json()
    let p=data.data.currencies.USDT

    console.log("priceeeeeeeeeeeeeeee:",p)

  return {
    props: {
      data: global.QSON.stringify({
        p,
        session,
        // nlangs,
      })
    },
  }
}