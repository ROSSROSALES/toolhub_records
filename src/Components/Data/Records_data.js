import pie1 from './Records_Figure1.JPG';
import pie2 from './Records_Figure2.JPG';

// Data pulled from API goes here
export const Records_data=
  {
    TotalTools: 2765,
    MissingTools: 2000,
    PercentMissing: ((2000/2765)*100).toFixed(2)+' %',
    PieChart1: pie1,
    PieChart2: pie2,
    ToolsEdited: 765,
  };
