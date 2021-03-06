export enum BreakPoint {
    largest,
    large,
    medium, 
    small,
    smallest
  }
  
  export const respond = (breakPoint: BreakPoint, content: string) => {
    switch (breakPoint) {
      case BreakPoint.largest:
        return `@media only screen and (max-width: 75rem ) { ${content} }`;    //1200px
      case BreakPoint.large:
        return `@media only screen and (max-width: 68.75rem ) { ${content} }`;  //1100px;
      case BreakPoint.medium:
        return `@media only screen and (max-width: 56.25rem ) { ${content} }`;  //900px 
      case BreakPoint.small:
          return `@media only screen and (max-width: 37.5rem ) { ${content} }`;  //600px
      case BreakPoint.smallest:
          return `@media only screen and (max-width: 31.25rem ) { ${content} }`; //500px
  
      default:
        return ``;
    }
  };