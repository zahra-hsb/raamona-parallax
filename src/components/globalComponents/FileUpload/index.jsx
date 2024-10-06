const FileUpload = () => {
    return (
        <>
            <button className="text-cyan-500" onClick={() => document.getElementById('fileUpload').click()}>select a file</button>
            <input type="file" id="fileUpload" className="hidden" />
        </>
    )
}

export default FileUpload;