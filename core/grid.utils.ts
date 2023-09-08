import {ListOnItemsRenderedProps} from "react-window";

export function getGridRenderer(onItemsRendered: (props: ListOnItemsRenderedProps) => any) {
    return (gridData: any) => {
        const useOverScanForLoading = true;
        const {
            visibleRowStartIndex,
            visibleRowStopIndex,
            visibleColumnStopIndex,
            overscanRowStartIndex,
            overscanRowStopIndex,
            overscanColumnStopIndex
        } = gridData;

        const endCol =
            (useOverScanForLoading || true
                ? overscanColumnStopIndex
                : visibleColumnStopIndex) + 1;

        const startRow =
            useOverScanForLoading || true
                ? overscanRowStartIndex
                : visibleRowStartIndex;
        const endRow =
            useOverScanForLoading || true
                ? overscanRowStopIndex
                : visibleRowStopIndex;

        const visibleStartIndex = startRow * endCol;
        const visibleStopIndex = endRow * endCol;
        const props: any = {
            visibleStartIndex,
            visibleStopIndex
        }
        onItemsRendered(props);
    };
}