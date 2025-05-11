"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Undo, Upload } from "lucide-react"
import { Input } from "../ui/input"
import { Progress } from "../ui/progress"
import { Button } from "../ui/button"

/*
Handles the following steps:
1. Upload a file
2. Select a square area in the image for a QR code location
3. Put a dummy QR code in the selected area, allow the user to approve
4. Request additional information about the event.
*/

export default function ImageEditor() {
    const [file, setFile] = React.useState<File | null>(null)
    const [progress, setProgress] = React.useState(0)

    function proceed(){
        if (progress == 0) {
            return file !== null
        }
    }

    function goBack(){
        if (progress == 1) {
            setFile(null)
            setProgress(0)
        }
    }

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const selectedFile = event.target.files?.[0]
        if (selectedFile && 
            selectedFile.size <= 5 * 1024 * 1024 && 
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
                    <CardTitle>Upload a File</CardTitle>
                    <CardDescription>Upload the media you intend to use for promoting your event.</CardDescription>
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
                                PNG or JPG (MAX 800 x 400px and 5MB)
                            </p>
                        </label>
                        <Input id="fileupload" type="file" className="hidden" onChange={handleFileChange} />
                    </div>
                </form>}
                {/* Step 2 */}
                {progress == 1 && (<div className="flex flex-col items-center justify-center w-full min-h-64 border-2 border-muted-foreground border-dashed rounded-lg bg-background">

                </div>)}
            </CardContent>
            <CardFooter className="gap-4">
                <Progress value={progress * 25} className="w-full" />
                <Button variant="outline" className="cursor-pointer" disabled={progress==0} onClick={goBack}><Undo />Back</Button>
                <Button variant="outline" className="cursor-pointer" disabled={!proceed()}>Next</Button>
            </CardFooter>
        </Card>
    )
}