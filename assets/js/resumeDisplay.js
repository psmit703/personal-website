document.addEventListener("adobe_dc_view_sdk.ready", function () {
    var adobeDCView = new AdobeDC.View({ clientId: "b32827ef44d9406395e169bf3feca8c4", divId: "technical-resume-custom" });
    adobeDCView.previewFile(
        {
            content: { location: { url: technicalResumePath } },
            metaData: { fileName: "Pete Smith Résumé (Technical)", hasReadOnlyAccess: true }
        },
        {
            embedMode: "IN_LINE",
            showFullScreen: true,
            showDownloadPDF: true,
            showPrintPDF: true
        }

    );
});

document.addEventListener("adobe_dc_view_sdk.ready", function () {
    var adobeDCView = new AdobeDC.View({ clientId: "b32827ef44d9406395e169bf3feca8c4", divId: "humanities-resume-custom" });
    adobeDCView.previewFile(
        {
            content: { location: { url: humanitiesResumePath } },
            metaData: { fileName: "Pete Smith Résumé (Humanities)", hasReadOnlyAccess: true }
        },
        {
            embedMode: "IN_LINE",
            showFullScreen: true,
            showDownloadPDF: true,
            showPrintPDF: true
        }

    );
});