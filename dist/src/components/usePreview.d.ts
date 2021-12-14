declare const usePreview: (zoomStep: any) => {
    state: any;
    initFileSize: (width: number, height: number) => void;
    onZoomIn: () => void;
    onZoomOut: () => void;
    onResizePageZoom: () => void;
};
export default usePreview;
