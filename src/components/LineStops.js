import React, { useEffect } from 'react';
import LineStop from './LineStop';
import { connect } from 'react-redux';
import { getStatuses, setStatusAge, getLineStations} from '../actions/tube';
import TubeLineColourHeader from './layout/TubeLineHeader';
import Status from './layout/Status';
import { findLineName, findLine } from '../Helpers';
import '../scss/Section.scss';
import '../scss/LineStops.scss';

const LineStops = ({ 
  getLineStations, setStatusAge, getStatuses,
  tube: {
    statuses,
    loadedStatuses,
    statusesTimeStamp,
    statusesAge,
    lineStations,
    stations,
    loadedStations
  }, ...props }) => {
  
  const calledFrom = 'LineStops'
  const lineId = props.match.params.id
  let lineIndex = lineStations.findIndex(line => line.id === lineId);
  let lineName = 'Loading...'
  let line = undefined
  let lineStops = lineStations[lineIndex].stations

  // Status age counter
  useEffect(() => {
    const timer = setInterval(() => setStatusAge(calledFrom), 1000);
    return () => clearTimeout(timer);
  }, [setStatusAge]); 

  // Load lines statuses for name reference if not received already
  useEffect(() => {
    window.scrollTo(0, 0)
    if (statuses.length === 0 || !loadedStatuses) getStatuses(calledFrom)
  },[statuses, getStatuses, loadedStatuses])


  //Get stations for all Lines asyncronously
  useEffect(() => {
    const asyncApiCalls = async _ => {
      console.log('getLineStations: ALL')
      for (let i=0; i< statuses.length; i++ ){
        await getLineStations(statuses[i].id)
      }
    }
    if (!loadedStations && loadedStatuses) asyncApiCalls()
  },[statuses, loadedStations, loadedStatuses, getLineStations])

  
  if (statuses.length !== 0) {
    lineName = findLineName(statuses, lineId)
    line = findLine(statuses, lineId)
  }

  // if ((lineStations.length === statuses.length) && (statuses.length !== 0) && (loadedStations)) {
  //   lineStops = lineStations[lineIndex].stations
  // }


  return(
  <section>
    {/* <div className='sectionTitle'>Line Details</div> */}
    <div className='CardSingle'> 
      <div className='Card'>
        <TubeLineColourHeader lineId={lineId} lineName={lineName}/>
        <div className='cardBody'>
          
          <Status line={line} timeStamp={statusesTimeStamp} age={statusesAge}/>
  
          <div className='row titleRow'>
            <div className='status'>{lineStops.length} stations served: </div>
          </div>

          <div className='LineStops dataBlock'>
            {lineStops.map(stop => {
              let station = stations.find( station => station.id === stop.id )
              return <LineStop key={station.id} station={station}/>
              }
            )}
          </div>

        </div>

      </div>
    </div>
  </section>
)
}

const mapStateToProps = (state) => {
  return {
    tube: state.tube,
  }
}

export default connect(mapStateToProps, { getStatuses, setStatusAge, getLineStations })(LineStops);


// class LineStops extends Component{
//   static defaultProps={
//     line: {
//       id: 'loading...',
//       name: 'loading...',
//       stations: []
//     },
//     statuses: {
//     },
//     stations: []
//   }

//   render(){
//     const { line, statuses, stations } = this.props

//     let lineStops = line.stations.map(station => 
//       <LineStop key={station.id} station={station} stations={stations} statuses={statuses}/>
//     )

//     let lightColors = ['hammersmith-city','waterloo-city', 'circle']
//     let lightColor = ''

//       if (lightColors.includes(line.id)){
//         lightColor = 'lightColor'
//       }

//     console.log('line: ',line.id)



//     return(

//       <section>
//         {/* <div className='sectionTitle'>Line Details</div> */}
//         <div className='CardSingle'> 
//           <div className='Card'>
            
//             <div className={`row lineColor ${line.id}`}>
//               <div className={`${lightColor}`}>{line.name}</div>
//             </div>

//             {/* <div className='row'>
//               <div className='status'>Stations: {line.stations.length}</div>
//             </div> */}

//             <div className='row'>
//               <div className='column w100 indent1'>
//                 <h2>Stations Served ({line.stations.length})</h2>
//                 <div className='LineStops dataBlock indent2'>
//                   {/* <div className='row'>
//                     <h4 className='infoLabel'>Station</h4>
//                     <h4 className='infoLabel end'>Lines Served</h4>
//                   </div> */}
//                   {lineStops}
//                 </div>
//               </div>
//             </div>



//           </div>
//         </div>
//       </section>
//     )
//   }
// }

