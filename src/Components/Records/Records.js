import './Records.css';
import { Records_data } from '../Data/Records_data';

function Records() {
  const data = Records_data;
  
  const PercentMissing = () => {
    return (data.MissingTools/data.TotalTools*100).toFixed(2) +' %'
  }

  return (
    <>
      <div className="Records">

        <header className="header">
            Records
        </header>
        
        <div className='content'>

          <div class='grid-container'>
            <div class='grid-item' >
              Total Tools
              <p>
                {data.TotalTools}
              </p>
            </div>

            <div class='grid-item' >
              Tools Missing Info
              <p>
                {data.MissingTools}
              </p>
            </div>

            <div class='grid-item' >
              % Missing Info
              <p>
                {/* {data.PercentMissing} */}
                {PercentMissing()}
              </p>
            </div>

            <div class='grid-item'>
              Tools Edited
              <p>
                {data.ToolsEdited}
              </p>
            </div>

            <div class='grid-item'>
              Tools Skipped
              <p>
                {'150'}
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
export default Records;
