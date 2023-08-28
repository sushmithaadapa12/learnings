

const artistEnquiry=(firstname,enquiry_mlink,artist_id)=>{

let template=`Dear ${firstname},
<br>
You have been sent an enquiry, it is essential that you follow the link below as soon
as possible to give us your response.
<br>
${enquiry_mlink}
<br>
It is also possible to see and answer all enquiries by logging in to your artist profile
via our website. (A reminder that your username is your personal Artist ID ${artist_id}.)
If you have forgotten your password please follow the 'Forgotten your password?' link on 
the home page.
<br>
Thank you,`

return template
}

module.exports={artistEnquiry}