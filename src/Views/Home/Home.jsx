import React from 'react'
import Scroller from '@enact/sandstone/Scroller'

function Home() {
    
    return (
        <div style={{ maxHeight: "100vh" }}>
            <div>sidebar thay đổi</div>
            <div>Top bar</div>
            <Scroller verticalScrollbar="hidden">
                <div style={{ height: "100vh" }}>
                    {/* <RowList /> */}
                    <p>rowlist</p>
                </div>

            </Scroller>

        </div>
    )
}

export default Home