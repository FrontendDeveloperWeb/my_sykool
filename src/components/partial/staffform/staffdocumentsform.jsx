import React from 'react'
import FlatButton from '@/components/shared/button/flatbutton';

const StaffDocumentsForm = () => {
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-8">
                    <label
                        htmlFor="documentUpload"
                        className="d-flex align-items-center justify-content-center w-100 p-5 border rounded"
                        style={{ cursor: 'pointer', border: '2px solid gray', color: '#5e5873' }}
                    >
                        Upload Documents
                    </label>
                    <input
                        type="file"
                        id="documentUpload"
                        className="d-none"
                        multiple
                    />
                </div>
            </div>
            <div className='row justify-content-center mt-5'>
                <div className="col-12 col-md-10 col-lg-8 col-xl-6">

                    <FlatButton htmlType="submit" className="btn save-btn w-100" title="Save" />
                </div>
            </div>

        </>
    )
}

export default StaffDocumentsForm