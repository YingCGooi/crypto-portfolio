import React from 'react';
import { connect } from 'react-redux';

import SearchAssetPanel from './AssetSearch/SearchAssetPanel';
import EditAssetPanel from './AssetEdit/EditAssetPanel';
import AssetsControlPanel from './AssetsHome/ControlPanel';
import AssetsTable from './AssetsHome/Table';

class AssetsContainer extends React.Component {
  render() {
    switch (this.props.show) {
      case 'home':
        return (
          <section className='ui blue segment'>
            <AssetsControlPanel />
            <AssetsTable />
          </section>
        )
      case 'search':
        return <SearchAssetPanel />
      case 'edit':
        return <EditAssetPanel />
      default:
        return <div></div>
    } 
  }
}

const mapStateToProps = (state) => (
  {
    show: state.show,
  }
);

export default connect(mapStateToProps)(AssetsContainer);