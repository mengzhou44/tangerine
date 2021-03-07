import  {useState} from 'react'
import styled from 'styled-components'


enum Tab {
   SaveWith, 
   GlobalETFPortfolios,
   GreatMortgageRates
}

const BannerBox = styled.div`
      height: 41.5rem; 
      background-image: url('images/mtg-awareness-tablet.jpeg');
      background-color: var(--text-color);
      background-size:cover; 
      position: relative; 

     .tabs {
         position: absolute; 
         height: 7.6rem; 
         bottom: 0; 
         left:0; 
         width:100%;
         background-color: #fff;

         list-style: none;
         display: flex;
         font-size: 19px;
         color: var(--tab-color);
         font-weight: 700; 
        
         li {
             cursor: pointer; 
             flex: 1; 
             display: flex; 
             justify-content: center; 
             align-items: center; 

             margin: 1.5rem 0;

             &:not(:last-of-type) {
                 border-right: 1px solid var(--tab-color);
             }

             &.selected {
                 border-right: none;
                 background-color: var(--primary);
                 color: #fff;
                 margin: 0;
                 position: relative; 
             }

             &.selected::after {
                width: 30px;
                height: 30px;
                content: '';
                transform: translateX(-50%) rotate(45deg);
                border-radius: 6px;
                background-color: var(--primary);
                position: absolute;
                z-index: 0;
                left: 50%;
                top: -11px;
             }
         }

     }

     .globalETFPortfolios .saveWith {
                border-right: none !important;
      }

     .greatMortgageRates .globalETFPortfolios {
               border-right: none !important;
           
     }

`


 

function getTabName(tab:Tab) {
    switch(tab) {
        case Tab.SaveWith:
             return 'saveWith'
        case Tab.GlobalETFPortfolios:
             return  'globalETFPortfolios'
        default: 
             return 'greatMortgageRates'
    }
}

export default function Banner() {
    const [currentTab, setCurrentTab] = useState(Tab.SaveWith)

    function getTabsClass() {
         return `tabs ${getTabName(currentTab)}`
    }

    function getTabClass(tab:Tab) {
        let res= getTabName(tab)
        if (tab === currentTab) return   `${res} selected`        
        return res;
    }

    return  <BannerBox>          
           <ul className={getTabsClass()}>
                  <li 
                      onClick={()=> setCurrentTab(Tab.SaveWith)} 
                      className={getTabClass(Tab.SaveWith)}
                  >
                      <span>Save with&nbsp;2.10%*</span>
                  </li>
                  <li 
                      onClick={()=> setCurrentTab(Tab.GlobalETFPortfolios)} 
                      className={getTabClass(Tab.GlobalETFPortfolios)}>
                       <span>Global ETF Portfolios</span>
                  </li>
                  <li 
                    onClick={()=> setCurrentTab(Tab.GreatMortgageRates)}
                      className={getTabClass(Tab.GreatMortgageRates)}
                  >
                      <span>Great Mortgage rates </span>
                  </li>
           </ul>
    </BannerBox>
}