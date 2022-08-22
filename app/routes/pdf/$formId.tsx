import { Page, Text, View, Document, StyleSheet, Image, renderToStream } from '@react-pdf/renderer';
import { LoaderFunction } from "remix";
import { getCompletedForm1Data } from "~/server/services/functions/fetchCompletedForms.server";

export let loader: LoaderFunction = async ({ request, params }) => {

    const formData: any = await getCompletedForm1Data(params.formId);
    console.log(formData);

    // the styling for the PDF
    const styles = StyleSheet.create({
        headerSection: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: '7px',
        },
        headerLogo: {
            height: "70px",
            width: "35px"
        },
        headerContent: {
            display: 'flex',
            flexGrow: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        sectionHeaders: {
            backgroundColor: "#c10100",
            border: "0.5px solid black",
            color: "white",
            fontSize: "8px",
            fontFamily: "Helvetica-Bold",
            padding: "2px"
        },
        sectionArea: {
            display: "flex",
            flexDirection: 'row',
            width: "100%",
            justifyContent: 'center',
            alignItems: "center",
            fontSize: "8px"
        },
        tableHeader: {
            border: "0.5px solid black",
            fontFamily: "Helvetica-Bold",
            padding: "2px",
            height: "30px",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1
        },
        tableCell: {
            border: "0.6px solid black",
            height: "10px",
            backgroundColor: "#ebf2ff",
            textAlign: "center"
        },
        sectionC: {
            display: 'flex',
            flexDirection: "column",
            width: '100%',
        },
        additionalInfo: {
            height: "110px",
            width: "50%",
            border: "0.5px solid black"
        }
    });

    // meta data for section C
    const sectionCMetaData = [
        // first row
        { width: "36px" },
        { width: "100px" },
        { width: "106px" },
        { width: "88px" },
        { width: "99px" },
        { width: "33px" },
        { width: "36px" },
        { width: "55px" },
        // second row
        { width: "35px" },
        { width: "83px" },
        { width: "83px" },
        { width: "149px" },
        { width: "196px" },
        // third row
        { width: "68px" },
        { width: "73px" },
        { width: "70px" },
        { width: "64px" },
        { width: "82px" },
        { width: "19px" },
        { width: "16px" },
        { width: "65px" },
        { width: "92px" },
        // fourth row
        { width: "117px" },
        { width: "99px" },
        // fifth row
        { width: "38px" },
        { width: "100px" },
        { width: "36px" },
        { width: "39px" },
        { width: "109px" },
        { width: "82px" },
        { width: "81px" },
        { width: "54px" },
    ]

    // the PDF to be rendered
    const PDFForm = () => {
        return (
            <Document title={`ADR_Form_${formData?._id}`} subject="ADR Reporting Form" keywords="ADR" language="en">
                <Page size="A4" style={{ padding: "28px" }}>
                    <View style={styles.headerSection}>
                        <View style={styles.headerLogo}>
                            <Image src={'https://imgs.search.brave.com/M0QKxOfJcpjmJ_OdtSATaL6qa7_wX1uyqvXzpDC0SrA/rs:fit:84:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/U0hSVGczUlR1VUpI/bno0WDF3NFBnQUFB/QSZwaWQ9QXBp'} />
                        </View>
                        <View style={styles.headerContent}>
                            <Text style={{ fontSize: "12px", fontFamily: "Times-Bold" }}>
                                SUSPECTED ADVERSE DRUG REACTION REPORTING FORM
                            </Text>
                            <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                                For <span style={{ fontFamily: "Helvetica-Bold" }}>VOLUNTARY</span> reporting of ADRs by Healthcare Professionals
                            </Text>
                            <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                                <span style={{ fontFamily: "Helvetica-Bold" }}>INDIAN PHARMACOPOEIA COMMISSION</span> (National Coordination Centre-Pharmacovigilance Programme of India)
                            </Text>
                            <Text style={{ fontSize: "8px", marginTop: "3px" }}>Ministry of Health & Family Welfare, Government of India, Sector-23, Raj Nagar, Ghaziabad-201002</Text>
                            <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                                <span style={{ fontFamily: "Helvetica-Bold" }}>PvPI Helpline (Toll Free) :1800-180-3024</span> (9:00 AM to 5:30 PM, Monday-Friday)
                            </Text>
                        </View>
                    </View>
                    <View style={styles.sectionC}>
                        <View style={styles.sectionHeaders}>
                            <Text>C. SUSPECTED MEDICATION(S)*</Text>
                        </View>
                        {/* first row */}
                        <View style={styles.sectionArea}>
                            <View style={styles.tableHeader}>
                                <Text>S. No.</Text>
                            </View>
                            <View style={styles.tableHeader}>
                                <Text>Name (Brand/Generic)</Text>
                            </View>
                            <View style={styles.tableHeader}>
                                <Text>Manufacturer (if known)</Text>
                            </View>
                            <View style={styles.tableHeader}>
                                <Text>Batch No. (Lot No.)</Text>
                            </View>
                            <View style={styles.tableHeader}>
                                <Text>Expiry Date (if known)</Text>
                            </View>
                            <View style={styles.tableHeader}>
                                <Text>Dose</Text>
                            </View>
                            <View style={styles.tableHeader}>
                                <Text>Route</Text>
                            </View>
                            <View style={styles.tableHeader}>
                                <Text>Frequency</Text>
                            </View>
                        </View>
                        <View style={styles.sectionArea}>
                            {
                                sectionCMetaData.slice(0, 8).map((metaData: any) => {
                                    return <Text style={[styles.tableCell, { width: metaData.width }]}></Text>
                                })
                            }
                        </View>
                        <View style={styles.sectionArea}>
                            {
                                sectionCMetaData.slice(0, 8).map((metaData: any) => {
                                    return <Text style={[styles.tableCell, { width: metaData.width }]}></Text>
                                })
                            }
                        </View>
                        <View style={styles.sectionArea}>
                            {
                                sectionCMetaData.slice(0, 8).map((metaData: any) => {
                                    return <Text style={[styles.tableCell, { width: metaData.width }]}></Text>
                                })
                            }
                        </View>
                        <View style={styles.sectionArea}>
                            {
                                sectionCMetaData.slice(0, 8).map((metaData: any) => {
                                    return <Text style={[styles.tableCell, { width: metaData.width }]}></Text>
                                })
                            }
                        </View>
                    </View>
                    {/* second row */}
                    <View style={[styles.sectionC, { marginTop: "2px" }]}>
                        <View style={styles.sectionArea}>
                            <View style={{
                                width: "35px",
                                border: "0.5px solid black",
                                fontFamily: "Helvetica-Bold",
                                padding: "2px",
                                height: "30px",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Text>S. No.</Text>
                            </View>
                            <View style={{
                                display: "flex",
                                flexDirection: "column",
                                border: "0.5px solid black",
                                fontFamily: "Helvetica-Bold",
                                padding: "1px",
                                height: "30px",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <View style={{ height: "15px", width: "160px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
                                    <Text>Therapy Dates</Text>
                                </View>
                                <View style={{ height: "15px", width: "161px", display: "flex", flexDirection: "row", borderTop: "0.5px solid black", }}>
                                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "83px", borderRight: "0.5px solid black" }}>
                                        <Text>Date started</Text>
                                    </View>
                                    <View style={{ height: "15px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "83px" }}>
                                        <Text>Date stopped</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.tableHeader}>
                                <Text>Indication</Text>
                            </View>
                            <View style={styles.tableHeader}>
                                <Text>Causality Assessment</Text>
                            </View>
                        </View>
                        <View style={styles.sectionArea}>
                            {
                                sectionCMetaData.slice(8, 13).map((metaData: any) => {
                                    return <Text style={[styles.tableCell, { width: metaData.width }]}></Text>
                                })
                            }
                        </View>
                        <View style={styles.sectionArea}>
                            {
                                sectionCMetaData.slice(8, 13).map((metaData: any) => {
                                    return <Text style={[styles.tableCell, { width: metaData.width }]}></Text>
                                })
                            }
                        </View>
                        <View style={styles.sectionArea}>
                            {
                                sectionCMetaData.slice(8, 13).map((metaData: any) => {
                                    return <Text style={[styles.tableCell, { width: metaData.width }]}></Text>
                                })
                            }
                        </View>
                        <View style={styles.sectionArea}>
                            {
                                sectionCMetaData.slice(8, 13).map((metaData: any) => {
                                    return <Text style={[styles.tableCell, { width: metaData.width }]}></Text>
                                })
                            }
                        </View>
                    </View>
                    {/* third row */}
                    <View style={[styles.sectionArea, { marginTop: "2px" }]}>
                        <View style={[styles.tableHeader, { width: "65%", fontFamily: 'Helvetica' }]}>
                            <Text>Action taken after reaction (Please tick) </Text>
                        </View>
                        <View style={[styles.tableHeader, { width: "35%", fontFamily: 'Helvetica' }]}>
                            <Text>
                                Reaction reappeared after reintroduction of
                                suspected medication (Please tick)
                            </Text>
                        </View>
                    </View>
                    <View style={styles.sectionArea}>
                        <View style={{ width: "65%", display: "flex", flexDirection: "row" }}>
                            <View style={styles.tableHeader}>
                                <Text>S. No. as per C</Text>
                            </View>
                            <View style={styles.tableHeader}>
                                <Text>Drug Withdrawn</Text>
                            </View>
                            <View style={styles.tableHeader}>
                                <Text>Dose increased</Text>
                            </View>
                            <View style={styles.tableHeader}>
                                <Text>Dose reduced</Text>
                            </View>
                            <View style={styles.tableHeader}>
                                <Text>Dose not changed</Text>
                            </View>
                        </View>
                        <View style={{ width: "35%", display: "flex", flexDirection: "row" }}>
                            <View style={styles.tableHeader}>
                                <Text>Yes</Text>
                            </View>
                            <View style={styles.tableHeader}>
                                <Text>No</Text>
                            </View>
                            <View style={styles.tableHeader}>
                                <Text>Effect unknown</Text>
                            </View>
                            <View style={styles.tableHeader}>
                                <Text>Dose (if re-introduced)</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.sectionArea}>
                        {
                            sectionCMetaData.slice(13, 22).map((metaData: any) => {
                                return <Text style={[styles.tableCell, { width: metaData.width }]}></Text>
                            })
                        }
                    </View>
                    <View style={styles.sectionArea}>
                        {
                            sectionCMetaData.slice(13, 22).map((metaData: any) => {
                                return <Text style={[styles.tableCell, { width: metaData.width }]}></Text>
                            })
                        }
                    </View>
                    <View style={styles.sectionArea}>
                        {
                            sectionCMetaData.slice(13, 22).map((metaData: any) => {
                                return <Text style={[styles.tableCell, { width: metaData.width }]}></Text>
                            })
                        }
                    </View>
                    <View style={styles.sectionArea}>
                        {
                            sectionCMetaData.slice(13, 22).map((metaData: any) => {
                                return <Text style={[styles.tableCell, { width: metaData.width }]}></Text>
                            })
                        }
                    </View>
                    {/* fourth row */}
                    <View style={[styles.sectionArea, { marginTop: "2px", justifyContent: "flex-start" }]}>
                        <View style={{ width: "40%", display: "flex", flexDirection: "row" }}>
                            <View style={styles.tableHeader}>
                                <Text>Not applicable</Text>
                            </View>
                            <View style={styles.tableHeader}>
                                <Text>Unknown</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.sectionArea, { justifyContent: "flex-start" }]}>
                        {
                            sectionCMetaData.slice(22, 24).map((metaData: any) => {
                                return <Text style={[styles.tableCell, { width: metaData.width }]}></Text>
                            })
                        }
                    </View>
                    <View style={[styles.sectionArea, { justifyContent: "flex-start" }]}>
                        {
                            sectionCMetaData.slice(22, 24).map((metaData: any) => {
                                return <Text style={[styles.tableCell, { width: metaData.width }]}></Text>
                            })
                        }
                    </View>
                    <View style={[styles.sectionArea, { justifyContent: "flex-start" }]}>
                        {
                            sectionCMetaData.slice(22, 24).map((metaData: any) => {
                                return <Text style={[styles.tableCell, { width: metaData.width }]}></Text>
                            })
                        }
                    </View>
                    <View style={[styles.sectionArea, { justifyContent: "flex-start" }]}>
                        {
                            sectionCMetaData.slice(22, 24).map((metaData: any) => {
                                return <Text style={[styles.tableCell, { width: metaData.width }]}></Text>
                            })
                        }
                    </View>
                    <View style={[styles.sectionArea, { marginTop: "2px" }]}>
                        <View style={[styles.tableHeader, { width: "100%", fontFamily: 'Helvetica' }]}>
                            <Text>
                                Concomitant medical product including self-medication add herbal remedies
                                with therapy dates (Exclude those used to treat reaction)
                            </Text>
                        </View>
                    </View>
                    <View style={styles.sectionArea}>
                        <View style={styles.tableHeader}>
                            <Text>S. No.</Text>
                        </View>
                        <View style={styles.tableHeader}>
                            <Text>Name (Brand/Generic)</Text>
                        </View>
                        <View style={styles.tableHeader}>
                            <Text>Dose</Text>
                        </View>
                        <View style={styles.tableHeader}>
                            <Text>Route</Text>
                        </View>
                        <View style={styles.tableHeader}>
                            <Text>Frequency (OD, BD, etc.)</Text>
                        </View>
                        <View style={{
                            display: "flex",
                            flexDirection: "column",
                            border: "0.5px solid black",
                            fontFamily: "Helvetica-Bold",
                            padding: "1px",
                            height: "30px",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <View style={{ height: "15px", width: "160px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
                                <Text>Therapy Dates</Text>
                            </View>
                            <View style={{ height: "15px", width: "161px", display: "flex", flexDirection: "row", borderTop: "0.5px solid black", }}>
                                <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "83px", borderRight: "0.5px solid black" }}>
                                    <Text>Date started</Text>
                                </View>
                                <View style={{ height: "15px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "83px" }}>
                                    <Text>Date stopped</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.tableHeader}>
                            <Text>Indication</Text>
                        </View>
                    </View>
                    <View style={[styles.sectionArea, { justifyContent: "flex-start" }]}>
                        {
                            sectionCMetaData.slice(24, 32).map((metaData: any) => {
                                return <Text style={[styles.tableCell, { width: metaData.width }]}></Text>
                            })
                        }
                    </View>
                    <View style={[styles.sectionArea, { justifyContent: "flex-start" }]}>
                        {
                            sectionCMetaData.slice(24, 32).map((metaData: any) => {
                                return <Text style={[styles.tableCell, { width: metaData.width }]}></Text>
                            })
                        }
                    </View>
                    <View style={[styles.sectionArea, { justifyContent: "flex-start" }]}>
                        {
                            sectionCMetaData.slice(24, 32).map((metaData: any) => {
                                return <Text style={[styles.tableCell, { width: metaData.width }]}></Text>
                            })
                        }
                    </View>
                    <View style={[styles.sectionArea, { justifyContent: "flex-start" }]}>
                        {
                            sectionCMetaData.slice(24, 32).map((metaData: any) => {
                                return <Text style={[styles.tableCell, { width: metaData.width }]}></Text>
                            })
                        }
                    </View>
                    <View style={[styles.sectionArea, { marginTop: "2px" }]}>
                        <View style={styles.additionalInfo}>
                            <View style={[styles.tableHeader, { height: "20px" }]}>
                                <Text>Additional Information</Text>
                            </View>
                            <View style={[styles.tableCell, { height: "90px" }]}></View>
                        </View>
                        <View style={styles.additionalInfo}>
                            <View style={styles.sectionHeaders}>
                                <Text>D. REPORTER DETAILS*</Text>
                            </View>
                            <View style={{ height: "90px", padding: "2px" }}>
                                <Text style={{ fontSize: "8px", fontFamily: "Helvetica-Bold" }}>Name and Address</Text>
                                <Text style={{ fontSize: "8px", fontFamily: "Helvetica" }}>
                                    Parthiv Menon, 15 Indira Nagar First Avenue Karnatka, Parthiv Menon, 15 Indira Nagar First Avenue Karnatka,Parthiv Menon, 15 Indira Nagar First Avenue Karnatka
                                </Text>
                                <View style={{ display: "flex", flexDirection: "row", marginTop: "2px" }}>
                                    <Text style={{ fontSize: "8px", fontFamily: "Helvetica-Bold", }}>Pin</Text>
                                    <Text style={{ fontSize: "8px", fontFamily: "Helvetica", marginLeft: "2px" }}>680503</Text>
                                    <Text style={{ fontSize: "8px", fontFamily: "Helvetica-Bold", marginLeft: "4px" }}>Email</Text>
                                    <Text style={{ fontSize: "8px", fontFamily: "Helvetica", marginLeft: "2px" }}>parthivmenon01@gmail.com</Text>
                                </View>
                                <View style={{ display: "flex", flexDirection: "row", marginTop: "2px" }}>
                                    <Text style={{ fontSize: "8px", fontFamily: "Helvetica-Bold" }}>Contact No.</Text>
                                    <Text style={{ fontSize: "8px", fontFamily: "Helvetica", marginLeft: "2px" }}>9495589440</Text>
                                </View>
                                <View style={{ display: "flex", flexDirection: "row", marginTop: "2px" }}>
                                    <Text style={{ fontSize: "8px", fontFamily: "Helvetica-Bold", }}>Occupation</Text>
                                    <Text style={{ fontSize: "8px", fontFamily: "Helvetica", marginLeft: "2px" }}>Doctor</Text>
                                    <Text style={{ fontSize: "8px", fontFamily: "Helvetica-Bold", marginLeft: "4px" }}>Signature</Text>
                                    <Text style={{ fontSize: "8px", fontFamily: "Helvetica", marginLeft: "2px" }}>parthiv</Text>
                                </View>
                                <View style={{ height: "10px", marginTop: "auto" }}>
                                    <Text style={{ fontFamily: "Helvetica-Bold" }}>Date of this report (dd/mm/yyyy): </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.sectionArea, { justifyContent: "flex-start", marginTop: "2px", width: "100%", border: "0.5px solid black", padding: "2px" }]}>
                        <Text>Signature and name of receving personnel: </Text>
                    </View>
                    <View style={[styles.sectionHeaders, { justifyContent: "flex-start", width: "100%", padding: "2px" }]}>
                        <Text>
                            Confidentiality : The patient’s identity is held in strict confidence and protected to the fullest extent. Submission of a report does not
                            constitute an admission that medical personnel or manufacturer or the product caused or contributed to the reaction. Submiss ion of an
                            ADR report does not have any legal implication on the reporter.
                        </Text>
                    </View>
                </Page >
            </Document >
        );
    }

    // creating a stream
    let stream = await renderToStream(<PDFForm />);

    // and transform it to a Buffer to send in the Response
    let body: Buffer = await new Promise((resolve, reject) => {
        let buffers: Uint8Array[] = [];
        stream.on("data", (data) => {
            buffers.push(data);
        });
        stream.on("end", () => {
            resolve(Buffer.concat(buffers));
        });
        stream.on("error", reject);
    });

    let headers = new Headers({ "Content-Type": "application/pdf" });
    return new Response(body, { status: 200, headers: headers });
}