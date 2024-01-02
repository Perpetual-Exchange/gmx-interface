import "./RoadMap.scss";

export default function RoadMap() {
  const LIST_INFO = [{
    title:'2023 - Q4:',
    date:'2023',
    tag:'N',
    list:[{
      text:'Publish NeonNexus Docs',
      state:true
    },{
      text:'Launch NeonNexus Website',
      state:true
    },{
      text:'Introduce Rollux Testnet',
      state:true
    },{
      text:'Launch on Rollux Testnet',
      state:true
    }]
  },{
    title:'2023 - Q1:',
    date:'2023',
    tag:'O',
    list:[{
      text:'Launch NOX Tokenomics',
      state:true
    },{
      text:'Launch Testnet Airdrop Campaign  ',
      state:false
    },{
      text:'Upgrade Permissionless Pool',
      state:false
    },{
      text:'Launch IDO ',
      state:false
    },{
      text:'Launch on Mainnet',
      state:false
    }]
  },{
    title:'2024 - Q2:',
    date:'2024',
    tag:'X',
    list:[{
      text:'Liquidity Growth Incentive',
      state:false
    },{
      text:'Marketing Campaign',
      state:false
    },{
      text:'DAO Governance',
      state:false
    }]
  }]
  return (
    <div className="Home-roadMap-list">
        <h3>ROADMAP</h3>
        <div className="grid grid-cols-3 md:gap-x-10 max-md:grid-cols-1 max-md:gap-y-10  max-md:gap-x-0">
          {LIST_INFO.map(v=>(
            <div className="item" key={v.title}>
              <div className="font-bold text-[3rem] mb-4">{v.title}</div>
              <div className="state-list-box">
                {v.list.map(list=>(
                  <div className={list.state?'active':''}>{list.text}</div>
                ))}
              </div>
              <div className="item-tag">{v.tag}</div>
            </div>
          ))}
        </div>
    </div>
  );
}
