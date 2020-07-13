import React from "react";


function Seller() {
    return (
        <div>
            <div class="jumbotron">
                <label for="basic-url">Your Image URL</label>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                    </div>
                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                </div>

                <div id="regFormContainer" className="bar-colors-borders">
                    <form action="uploadImages.php" method="post" onsubmit="return validateUploadFile();" enctype="multipart/form-data" >
                        <p><input type="hidden" name="MAX_FILE_SIZE" value="100000" /></p>
                        <div className="uploadFileprompt">
                            <div className="span_left">File 1 to upload - Max. 100kb</div>
                            <div className="span_right"><input type="file" name="txtUploadFile[]" /></div>
                        </div>
                        <div className="uploadFileprompt">
                            <div className="span_left">File 2 to upload - Max. 100kb</div>
                            <div className="span_right"><input type="file" name="txtUploadFile[]" /></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default Seller;