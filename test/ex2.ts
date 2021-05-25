import { assert } from "console";

const resourcesTypeJson =
{
    "resourceType": "Bundle",
    "meta": {
        "versionId": "1",
        "lastUpdated": "2020-03-13T09:08:35.72+00:00"
    },
    "type": "transaction",
    "entry": [
        {
            "fullUrl": "urn:uuid:6aa6358b-4362-4038-842d-bf4551c310fb",
            "resource": {
                "meta": {
                    "profile": [
                        "http://example.org/fhir/StructureDefinition/DHPEncounter"
                    ]
                },
                "resourceType": "Encounter",
                "status": "finished",
                "class": {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
                    "code": "VR",
                    "version": "v3",
                    "display": "virtual"
                },
                "subject": {
                    "reference": "urn:uuid:0788ff90-fbcf-459f-bc1e-f9d25a3580a4"
                },
                "period": {
                    "start": "2019-11-12T10:51:09.782Z",
                    "end": "2019-11-12T10:52:40.12Z"
                },
                "extension": [
                    {
                        "url": "http://example.org/fhir/StructureDefinition/DHPContext",
                        "extension": [
                            {
                                "url": "producerId",

                                "valueId": "producerId"
                            },
                            {
                                "url": "producerChannelId",
                                "valueId": "producerChanId"
                            },
                            {
                                "url": "serviceProviderId",
                                "valueId": "serviceProvId"
                            },
                            {
                                "url": "serviceId",
                                "valueId": "srvId"
                            },
                            {
                                "url": "journeyId",
                                "valueId": "jid"
                            },
                            {
                                "url": "userId",
                                "valueId": "userId"
                            },
                            {
                                "url": "deviceId",
                                "valueId": "deviceId1"
                            }
                        ]
                    }
                ]
            }
        }
    ]
};
let array = resourcesTypeJson.entry[0].resource.extension[0].extension;

array.forEach(element => {
    (element.url=='deviceId') && assert(element.valueId == 'deviceId1') ;
});