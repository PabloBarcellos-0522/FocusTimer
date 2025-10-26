import { useEffect, useState } from "react"

const UrlInput = ({ label, videoUrl, onChange }) => {
    const [value, setValue] = useState(videoUrl)

    const trasformUrl = (url) => {
        if (url.includes("watch?v=") && url.includes("youtube.com")) {
            onChange(url.replace("watch?v=", "embed/") + "?enablejsapi=1")
            return url.replace("watch?v=", "embed/") + "?enablejsapi=1"
        } else if (url.includes("youtu.be")) {
            const videoId = url.split("youtu.be/")[1]
            onChange("https://www.youtube.com/embed/" + videoId + "?enablejsapi=1")
            return "https://www.youtube.com/embed/" + videoId + "?enablejsapi=1"
        } else if (
            url.includes("https://www.youtube.com/embed/") &&
            url.includes("?enablejsapi=1")
        ) {
            onChange(url)
            return url
        }

        if (url == "") {
            onChange("https://www.youtube.com/embed/jfKfPfyJRdk?enablejsapi=1")
            return ""
        }

        return url
    }

    return (
        <div className="flex flex-col items-start m-2 w-full px-5 py-2">
            <label className="text-theme-text mb-1 px-5">{label}</label>
            <input
                id="input"
                type="url"
                value={value}
                onChange={(e) => {
                    const val = e.target.value
                    setValue(val)
                }}
                onBlur={(e) => {
                    const val = e.target.value
                    e.target.value = trasformUrl(val)
                }}
                pattern="https://.*"
                className="w-full h-14 rounded-lg text-xl text- text-theme-text bg-theme-config px-5"
                min="1"
            />
        </div>
    )
}

export default UrlInput
