import "./RoadMap.scss";

export default function RoadMap() {
  const LIST_INFO = [{
    title:'2023 - Q3:',
    date:'2023',
    tag:'R',
    list:[{
      text:'Publish NeonNexus Docs',
      state:true
    },{
      text:'Launch NeonNexus Website',
      state:true
    },{
      text:'Introduce Rollux Testnet',
      state:false
    }]
  },{
    title:'2023 - Q4:',
    date:'2023',
    tag:'E',
    list:[{
      text:'Launch on Rollux Mainnet',
      state:false
    },{
      text:'Launch Rewards Campaign',
      state:false
    },{
      text:'Release NOX Tokenomics',
      state:false
    }]
  },{
    title:'2024 - Q1:',
    date:'2024',
    tag:'X',
    list:[{
      text:'NOX Token Airdrop Campaign',
      state:false
    },{
      text:'DAO Governance',
      state:false
    },{
      text:'Add New Assets',
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
