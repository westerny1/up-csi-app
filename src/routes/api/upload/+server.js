import { PUBLIC_GOOGLE_PRIVATE_KEY, PUBLIC_GOOGLE_SERVICE_EMAIL } from '$env/static/public';
import { google } from 'googleapis';

export async function POST() {
    try {
        // const GOOGLE_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCu13gqj3gRylwb\n3itdZgjuqIPmo2k0nja3fEzM7cdPw54dV9p8uc4+9he9riu0DBkO6OAyMITefNMJ\nJTkyWwPGw7y7YJRP/CtKQszXgCJkaGNYhQldA7JrCSEnWpQmXid/eLg6aA9kCkFw\nKp7WUNJeQowLQjsk0XQGeK9SbBLTkAGF8PckL/QD3jAdP27dQ12UlRNt3TR3A53w\n0uf+JJvvaXDmDCxPDGlSsTUxc84VThHbO3UdW8OtG7qXNaxNvU5766WJYCHTgrwt\n9fScOyYEBsnIlqcZtfHKI9V3R4qSh3u9cQ6ii3Eack0n3FKU1xYys5Tbo42Kzb8l\n42Po1AUbAgMBAAECggEAAnZz1RPb0DYdencCqAaTA2mQroBPobdv5d27rlApUMJO\nZZ4UD/zMO1l3l7IndTap9z/MCKHVbw6c00Am+TRhpwOEks8XOXy/z1m+24+Ms5OU\n1jSULaEAJXgJOp/JxYl3wIN0H4WYmQM/hgx+TZdjLWbv5LbtOB410Q32kVeHBwZ9\nYDcfXF1wlHOxrjiTHMZZOMHlwvRnpJORG8Cq/euJEUt5J5l7KQ1xBfZwkS53GAs6\nclTJ+ePUX1G9G9qPM5RweQV4b3ke8VI7lNEhjR/n/ISZHmdw8LE4vr5Bfcnn5hzD\n780H+aaSdEIrbMSPiFSzdf+21n97NQdf2YXeavLCAQKBgQDmQV6hq8K94hFsS2ut\nhYYaDz2tA+F7neW3Ds1S1WIm8kNOtXqHgOc9FRB1T3l1rA3yFTurDlxkUWYMVRPW\nPYG7DaF6L1x6OLJwTz7RJpZM6r7KonIAuf7AvcXBocnv82VChIwRvhWo+W57YU1J\nQVOcuaMygTdGLf9HkwgwKcESWwKBgQDCY/yS3sCjrII4gPaDV1WLv+KYdy/gwctY\n1fF4dnLeY0zlUAHnJzb2TBMLa23CNRYFFnMxltEEglG5xbyo2hmqkT+JApCauavP\nJzzz37tXkE5x7egwwHy9cfW9LG3aN0rShG1+LrFI4nmdkFSnVoe5ECgQRLQIfAN4\nMAW9z8HUQQKBgHS6XwcG1Er++GY2NfhZ4IoFf/beKMlKWtJapqx/kKq91nFofx2C\ns7e7ngRarfCBsPAw43bsaNpSibFm0A+kTshNOLeAmxk69PsKsYXGUhvcRazkfXbw\n071Sd5aaNo12jrcSCxBTlRd8nA3gXhXtED47vgg0iZkCaJAYceY4xLBRAoGAX1P/\nSds5J0ry9VixC0np5sWsDs7sSNFgsmkAqO2VeV/DFvV8aWo+ttwpvsDpK4MzED2p\nMhle2VI7V9oToc6LJa1jNgJu/aGuEsGQT5xZWCCph49+/WF4CsN3GlVObeQNql1N\nAMNPJ4oAz/c2vHVfy66Tpx66FysR3H/YYPQgfsECgYBAQCcK4xTTajDIuxrjEY4m\nRefrm1tl1igBKIyiP17TF1Q6OF7CzP1Ef27ijSmRzndecte7ve1WEpd9rqsegCKt\npJ3rfWCbWpSshCNdnFYuCMr+ZB/stHgpRWpb2hJ+W43cluVUQGLVkAWEVLbO9NDq\nhHI9kX51pg/nzF1xqzkfww==\n-----END PRIVATE KEY-----\n"
        // Set up JWT authentication using service account credentials
        const auth = new google.auth.JWT(
            PUBLIC_GOOGLE_SERVICE_EMAIL, // Service account email
            '',
            PUBLIC_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Private key
            ['https://www.googleapis.com/auth/drive.readonly'], // Scopes
        );

        // Set up the Google Drive API client
        const drive = google.drive({ version: 'v3', auth });

        // Handle file upload or other operations here
        // Example: List the first 10 files from Google Drive
        const res = await drive.files.list({
            pageSize: 10,
            fields: 'files(id, name)',
        });

        // console.log(res);

        const { files } = res.data;
        if (files?.length === 0) {
            return new Response('No files found.', { status: 303 });
        }

        // Process or return the files
        return new Response(JSON.stringify(files), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        // console.error('Error interacting with Google Drive API:', error);
        return new Response(`Error interacting with Google Drive API ${error}`, { status: 500 });
    }

    // For getting files from a specific folder (requires folderID - ung asa link when you open a folder)
    //   const folderID = "1caL05EFKPFVySv4slWpDJERlD6zRBPGW";
    //   const res = await drive.files.list({
    //     q: `'${folderID}' in parents`,
    //     fields: 'files(id, name)',
    //     pageSize: 10
    //   });

    //   const files = res.data.files;

    //   if (!files || files.length === 0) {
    //     return new Response(JSON.stringify({ message: 'No files found.' }), {
    //       status: 303,
    //       headers: { 'Content-Type': 'application/json' }
    //     });
    //   }

    //   return new Response(JSON.stringify({ files }), {
    //     status: 200,
    //     headers: { 'Content-Type': 'application/json' }
    //   });

    // } catch (error) {
    //   console.error('Drive API error:', error);
    //   return new Response(
    //     JSON.stringify({ error: 'Error interacting with Google Drive API', details: error.message }),
    //     {
    //       status: 500,
    //       headers: { 'Content-Type': 'application/json' }
    //     }
    //   );
    // }
}
