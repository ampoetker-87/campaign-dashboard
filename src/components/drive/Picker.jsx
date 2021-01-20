import React, { Component } from 'react'
import GooglePicker from "react-google-picker"
import Campaign from '../campaigns/Campaign';

const CLIENT_ID = '40688782025-94ecbiq95be33gcjg9pnnd7s29nnhblp.apps.googleusercontent.com';
const DEVELOPER_KEY = 'AIzaSyC4YNy_d-jOAhb47tfynt8UZjWLq_5iPgE';
const SCOPE = ['https://www.googleapis.com/auth/drive'];

function Picker() {
  return (
    <div className="container">
      <GooglePicker clientId={CLIENT_ID}
              developerKey={DEVELOPER_KEY}
              scope={SCOPE}
              onChange={data => console.log('on change:', data)}
              onAuthFailed={data => console.log('on auth failed:', data)}
              multiselect={true}
              navHidden={true}
              authImmediate={false}
              viewId={'FOLDERS'}
              createPicker={ (google, oauthToken) => {
                const googleViewId = google.picker.ViewId.FOLDERS;
                const docsView = new google.picker.DocsView(googleViewId)
                    .setIncludeFolders(true)
                    .setMimeTypes('application/vnd.google-apps.folder')
                    .setSelectFolderEnabled(true);

                const picker = new window.google.picker.PickerBuilder()
                    .addView(docsView)
                    .setOAuthToken(oauthToken)
                    .setDeveloperKey(DEVELOPER_KEY)
                    .setCallback((data)=>{
                        var url = '';
                         if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
                        var doc = data[google.picker.Response.DOCUMENTS][0];
                        url = doc[google.picker.Document.URL];
                        }
                        var folderUrl = url;
                        return folderUrl;
                    });

                picker.build().setVisible(true);
            }}
        >
            <span className="picker-button">Select a campaign folder</span>
            
            <div className="google"></div>
        </GooglePicker>

    </div>
  )
}

console.log(Picker())
export default Picker;