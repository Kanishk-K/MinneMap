"use client"
import 'react-image-crop/dist/ReactCrop.css'

import React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Undo, Upload } from "lucide-react"
import { Input } from "../ui/input"
import { Progress } from "../ui/progress"
import { Button } from "../ui/button"
import ReactCrop, { type Crop } from "react-image-crop"

/*
Handles the following steps:
1. Upload a file
2. Select a square area in the image for a QR code location
3. Put a dummy QR code in the selected area, allow the user to approve
4. Request additional information about the event.
*/

const steps: Record<number, {title:string, description:string}> = {
    0: {
        title: "Upload a File",
        description: "Upload the media you intend to use for promoting your event."
    },
    1: {
        title: "Select a Square Area",
        description: "Select a square area in the image for a QR code location."
    },
    2: {
        title: "Approve QR Code Location",
        description: "Put a dummy QR code in the selected area, allow the user to approve."
    },
    3: {
        title: "Request Additional Information",
        description: "Request additional information about the event."
    }
}

export default function ImageEditor() {
    const [file, setFile] = React.useState<File | null>(null)
    const [crop, setCrop] = React.useState<Crop>()
    const [progress, setProgress] = React.useState(0)

    function proceed(){
        if (progress == 0) {
            return file !== null
        }
        if (progress == 1) {
            return crop !== undefined && crop.width > 0 && crop.height > 0
        }
    }

    function goBack(){
        if (progress == 1) {
            setFile(null)
            setCrop(undefined)
            setProgress(0)
        }
        if (progress == 2) {
            setCrop(undefined)
            setProgress(1)
        }
    }

    function goNext(){
        if (progress == 1 && crop !== undefined && crop.width > 0 && crop.height > 0) {
            setProgress(2)
        }
    }

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const selectedFile = event.target.files?.[0]
        if (selectedFile && 
            selectedFile.size <= 2 * 1024 * 1024 && 
            (selectedFile.type === "image/png" || selectedFile.type === "image/jpeg")) {
            setFile(selectedFile)
            setProgress(1)
        } else if (selectedFile) {
            alert("Please select a valid image file (PNG or JPG) with a maximum size of 5MB.")
        }
    }
    
    return (
        <Card className="col-span-2 sm:col-span-4 md:col-span-6">
            <CardHeader>
                    <CardTitle>{steps[progress].title}</CardTitle>
                <CardDescription>{steps[progress].description}</CardDescription>
            </CardHeader>
            <CardContent>
                {/* Step 1 */}
                {progress == 0 && <form>
                    <div className="flex items-center justify-center w-full">
                        <label htmlFor={"fileupload"} className="flex flex-col items-center justify-center w-full min-h-64 border-2 border-muted-foreground border-dashed rounded-lg cursor-pointer bg-muted hover:bg-background transition-all duration-150">
                            <Upload className="w-10 h-10 text-muted-foreground" />
                            <p className="mt-2 text-sm text-muted-foreground font-bold">
                                Click to upload
                            </p>
                            <p className="mt-2 text-sm text-muted-foreground">
                                PNG or JPG (MAX 800 x 400px and 2MB)
                            </p>
                        </label>
                        <Input id="fileupload" type="file" className="hidden" onChange={handleFileChange} />
                    </div>
                </form>}
                {/* Step 2 */}
                {progress == 1 && (<div className="flex flex-col p-8 items-center justify-center w-full min-h-64 border-2 border-muted-foreground border-dashed rounded-lg bg-background">
                    <ReactCrop crop={crop} onChange={(c, pc) => setCrop(pc)} aspect={1}>
                        <img src={URL.createObjectURL(file!)} alt="Preview" className="rounded-lg" />
                    </ReactCrop>
                </div>)}
            </CardContent>
            <CardFooter className="gap-4">
                <Progress value={progress * 25} className="w-full" />
                <Button variant="outline" className="cursor-pointer" disabled={progress==0} onClick={goBack}><Undo />Back</Button>
                <Button variant="outline" className="cursor-pointer" disabled={!proceed()} onClick={goNext}>Next</Button>
            </CardFooter>
        </Card>
    )
}