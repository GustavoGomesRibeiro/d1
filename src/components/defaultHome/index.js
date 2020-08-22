import React, { Component, Suspense } from 'react';
import { withRouter } from 'react-router-dom'
import '../../assets/style/App.css';


const DefaultHeader = React.lazy(() => import('../defaultHeader'))
const DefaultAside = React.lazy(() => import('../defaultAside'))

class DefaultLayout extends Component {

    loading = () => <div className="">Loading...</div>

    render() {
        return (
            <>
                <div className=''>
                    <Suspense fallback={this.loading()}>
                        <DefaultHeader />
                    </Suspense>
                </div>
                <div className=''>
                    <Suspense fallback={this.loading()}>
                        <DefaultAside />
                    </Suspense>
                </div>
                <div className='container-layout'>
                    <main>
                        {this.props.children}
                    </main>
                </div>
            </>
        )
    }
}

export default withRouter(DefaultLayout);

