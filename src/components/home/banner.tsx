import  {useState} from 'react'
import styled from 'styled-components'


enum Tab {
   SaveWith, 
   GlobalETFPortfolios,
   GreatMortgageRates
}

const BannerBox = styled.div`
      
      height: 41.5rem; 
      display: flex; 
      flex-direction: column;
      justify-content: space-between;
      border-bottom: 1px solid var(--grey-1);

      .slide-box {
        flex: 1;         
        position: relative;
         
        .nav {
            position: absolute; 
            border-radius: 50%;
            background-color: #fff; 
            width: 3rem;
            height: 3rem; 
            display: flex;
            justify-content:center;
            align-items:center; 
            background-color: var(--tab-color);
          
            cursor: pointer; 
            transition: all .2s;
            
            &:hover {
                transform: translateY(-2px);
                box-shadow: var(--shadow-light);
            }

            i {                
                display: flex;
                justify-content:center;
                align-items:center; 
                font-size: 2.5rem;
                color: var(--grey-1);
            }
        }

        .nav-prev{
                top: 43%;
                left: 1rem; 
         }

        .nav-next{
                top: 43%;
                right: 1rem; 
         }

           
        
      }

      .slide {
         height:100%;
         width: 100%;
         background-color: var(--text-color);
         background-size:cover; 
      }

      .slide.slide-saveWith {
         background-image: url('images/ETF_launch_tablet.jpeg');
         animation: moveToRight .5s;
      }
     
      .slide.slide-globalETFPortfolios {
         background-image: url('images/bundle_tablet.jpeg');
         animation: moveToRight .5s;
      }

      .slide.slide-greatMortgageRates {
        background-image: url('images/mtg-awareness-tablet.jpeg');
        animation: moveToRight .5s;
      }

     .tabs {
         height: 7.6rem;
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

    function renderSlide() {
        switch(currentTab) {
             case Tab.SaveWith: 
                  return  <div className='slide slide-saveWith'>
                  </div>
             case Tab.GlobalETFPortfolios:
                  return  <div className='slide slide-globalETFPortfolios'>
                </div>   
             default:
                  return  <div className='slide slide-greatMortgageRates'>
                 </div>    
        }
    }

    function moveToPrev() {
        switch(currentTab) {
            case Tab.SaveWith: 
                 setCurrentTab(Tab.GreatMortgageRates)
                 break
            case Tab.GlobalETFPortfolios:
                setCurrentTab(Tab.SaveWith)
                break
            default:
                setCurrentTab(Tab.GlobalETFPortfolios)
        }
    }

    function moveToNext() {
        switch(currentTab) {
            case Tab.SaveWith: 
                 setCurrentTab(Tab.GlobalETFPortfolios)
                 break
            case Tab.GlobalETFPortfolios:
                setCurrentTab(Tab.GreatMortgageRates)
                break
            default:
                setCurrentTab(Tab.SaveWith)
        }
    }

    return  <BannerBox>        
            <div className='slide-box'>
             {renderSlide()} 

            <div className='nav nav-prev'   aria-label='Previous' onClick={()=> moveToPrev()}><i className='icon-leftarrow'></i></div>
            <div className='nav nav-next'  aria-label='Next' onClick={()=> moveToNext()} ><i className='icon-rightarrow'></i></div>

            </div>  
          
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