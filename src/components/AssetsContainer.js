import React from 'react';
import { connect } from 'react-redux';

import SearchAssetPanel from './AssetSearch/SearchAssetPanel';
import EditAssetPanel from './AssetEdit/EditAssetPanel';
import AssetsControlPanel from './AssetsHome/AssetsControlPanel';
import AssetsTable from './AssetsHome/AssetsTable';

class AssetsContainer extends React.Component {
  render() {
    switch (this.props.show) {
      case 'home':
        return (
          <section className='ui blue segment'>
            <AssetsControlPanel />
            <AssetsTable assets={this.props.assets} />
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
    assets: state.assets,
  }
);

export default connect(mapStateToProps)(AssetsContainer);