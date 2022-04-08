import { getRemoteConfig } from "firebase/remote-config";
import { fetchAndActivate } from "firebase/remote-config";
import { useState } from "react";

// getRemoteConfig requires the codition process.browser else throws error
// this is the error

const FlagStatus = () => {
    const [isFlagStatus, setisFlagStatus] = useState(null)
    if (process.browser) {
        const remoteConfig = getRemoteConfig();
        remoteConfig.settings.minimumFetchIntervalMillis = 0;
        fetchAndActivate(remoteConfig)
            .then(() => {
                // ...
                setisFlagStatus(remoteConfig._client.storageCache.activeConfig.release);
            })
            .catch((err) => {
                // ...
                console.log(err);
            });
    }

    return (
        <div>
            <span>{isFlagStatus}</span>
        </div>
    )
}

export default FlagStatus
