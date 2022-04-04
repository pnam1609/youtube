import RowListItem from "./RowListItem/RowListItem"
import Scroller from '@enact/sandstone/Scroller';
const RowList = (props) => {
    const data = [1, 2, 3, 4]
    return <div {...props}>
            <Scroller horizontalScrollbar="hidden">
                <div style={{ display: "flex" }}>
                    {data.map((item, index) => {
                        return <RowListItem key={index} />
                    })}
                </div>
            </Scroller>
            <Scroller horizontalScrollbar="hidden">
                <div style={{ display: "flex" }}>
                    {data.map((item, index) => {
                        return <RowListItem key={index} />
                    })}
                </div>
            </Scroller>
            <Scroller horizontalScrollbar="hidden">
                <div style={{ display: "flex" }}>
                    {data.map((item, index) => {
                        return <RowListItem key={index} />
                    })}
                </div>
            </Scroller>

    </div>
}
export default RowList