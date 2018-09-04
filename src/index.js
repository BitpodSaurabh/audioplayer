import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import { s3service } from "./s3";
import { Player } from "./player";
import AudioPlayer from "react-modular-audio-player";
import "./styles.css";

const s3 = s3service.getS3();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let params = { Bucket: "home", Prefix: "", Delimiter: "" };
    s3.makeRequest("listObjects", params, (err, data) => {
      if (err) {
        this.setState({ error: "Failed to fetch list", objects: null });
      } else {
        let { files = [], contextPrefix } = s3service.getcontians(data, params);

        let playlist = files.map(({ Key }) => {
          return {
            src: s3.getSignedUrl("getObject", { Bucket: "home", Key }),
            title: Key
          };
        });
        this.setState({ error: null, playlist, contextPrefix });
      }
    });
  }
  render() {
    let {
      state: { error, playlist = [], contextPrefix }
    } = this;
    return (
      <div>
        {error && <div>{error}</div>}
        {!_.isEmpty(playlist) && (
          <div>
            <Player playlist={playlist} />
          </div>
        )}
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
