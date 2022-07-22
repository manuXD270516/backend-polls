const nodemailer = require("nodemailer");
const {google} =require('googleapis');
const currentEnvironment = require("../../config/environments");
const { OAuth2Client } = require("google-auth-library");
/**
 * 
 * @param {*} url Url of the form that will execute the password recovery
 * @returns 
 */
const getMailTemplate=(url)=>(`<!doctype html>
<html>
  <head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<meta name="description" content="Password Reset - Ac89 - Email Templates for developers" />
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<title>Password Reset - Ac89 - Email Templates for developers</title>
		<style>
			html,
			body {
				margin: 0 auto !important;
				padding: 0 !important;
				width: 100% !important;
				font-family: sans-serif;
				line-height: 1.4;
				-webkit-font-smoothing: antialiased;
				-ms-text-size-adjust: 100%;
				-webkit-text-size-adjust: 100%; 
			}
			* {
				-ms-text-size-adjust: 100%;
			}
			table,
			td {
				mso-table-lspace: 0pt !important;
				mso-table-rspace: 0pt !important;
			}
			img {
				display: block;
        border: none;
        max-width: 100%; 
        -ms-interpolation-mode: bicubic;
      }
			a {
				text-decoration: none;
			}
		</style>
	</head>
	<body
		leftmargin="0" 
		marginwidth="0" 
		topmargin="0" 
		marginheight="0" 
		offset="0" 
		bgcolor="#F3F5F9"
		width="100%"
		style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background: #F3F5F9;"
	>
		<!-- 
			| email container
		-->
		<table
			role="presentation"
			align="center" 
			valign="top" 
			border="0" 
			cellpadding="0" 
			cellspacing="0" 
			height="100%" 
			width="100%" 
			bgcolor="#F3F5F9" 
			style="border-spacing: 0; 
				border-collapse: collapse; 
				vertical-align: top; 
				padding: 0; 
				margin: 0; 
				width: 100%; 
				background: #F3F5F9"
		>
			<tr>
				<td height="30" style="height: 30px;">
					<img 
						src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png" 
						width="1" 
						height="1"
						border="0" 
						style="display: block; border: none" 
					/>
				</td>
			</tr>
			<tr>
				<td align="center"  valign="top">
					<!-- 
						| top header outside the wrapper
					-->
					
					<!-- 
						| END / top header outside the wrapper
					-->
				</td>	
			</tr>
			<tr>
				<td height=20" style="height: 20px;">
					<img 
						src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png" 
						width="1" 
						height="1" 
						border="0" 
						style="display: block; border: none" 
					/>
				</td>
			</tr>
			<tr>
				<td align="center" valign="top">
					<!-- 
						| email wrapper
					-->
					<table 
						role="presentation"
						align="center" 
						border="0" 
						cellpadding="0" 
						cellspacing="0" 
						width="600" 
						bgcolor="#ffffff" 
						style="max-width: 600px; 
							border-spacing: 0; 
							border-collapse: collapse; 
							vertical-align: top; 
							padding: 0; 
							margin: 0; 
							width: 100%;
							background: #ffffff;"
					>
						<tr>
							<td 
								height="5" 
								style="height: 5px; 
									background-color: #0069FF; 
									background-image: linear-gradient(-45deg, #0248FF, #0069FF);"
							>
								<img 
									src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png" 
									width="1" 
									height="1" 
									border="0" 
									style="display: block; border: none" 
								/>
							</td>
						</tr>
						<tr>
							<td height=40" style="height:40px">
								<img 
									src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png" 
									width="1" 
									height="1" 
									border="0" 
									style="display: block; border: none" 
								/>
							</td>
						</tr>
						<tr>
							<td align="center" valign="top">
								<!-- 
									| content container 
								-->
								<table 
									role="presentation"
									align="center" 
									border="0" 
									cellpadding="0" 
									cellspacing="0" 
									width="440" 
									style="max-width: 440px;
										border-spacing: 0; 
										border-collapse: collapse; 
										vertical-align: top; 
										padding: 0; 
										margin: 0;
										width: 100%;"
								>
									<tr>
										<td align="center">
											<!-- 
												| logotype 
											-->
											<img 
												src="https://nannys.com.bo/assets/img/logo.png" 
												width="170"
												style="border: none; display: block; max-width: 170px; width: 100%"
											>
										</td>
									</tr>			
									<tr>
										<td height="40" style="height:40px">
											<img 
												src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png" 
												width="1" 
												height="1" 
												border="0" 
												style="display: block; border: none" 
											/>		
										</td>
									</tr>
									<tr>
										<td>
											<h1 
												style="font-family: Arial, Helvetica, sans-serif; 
													font-size: 24px; 
													color: #010E28; 
													font-weight: bold; 
													margin: 0; 
													margin-bottom: 5px;
													padding: 0"
											>
												Hola, Usuario de Nannys!
											</h1>
											<p 
												style="font-family: Arial, Helvetica, sans-serif; 
													font-size: 16px; 
													color: #010E28;  
													margin: 0; 
													padding: 0"
											>
												Solicitud de Cambio de Contraseña
											</p>
										</td>
									</tr>
									<tr>
										<td height="15" style="height: 15px">
											<img 
												src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png" 
												width="1" 
												height="1" 
												border="0" 
												style="display: block; border: none" 
											/>	
										</td>
									</tr>
									<tr>
										<td>
											<p 
												style="font-family: Arial, Helvetica, sans-serif; 
													font-size: 15px; 
													color: #5B6987; 
													margin: 0; 
													padding: 0; 
													line-height: 20px;"
												>
                                                Parece que has olvidado la contraseña de tu cuenta, puedes cambiarla desde el boton que esta abajo:
												
											</p>
										</td>
									</tr>
									<tr>
										<td height="45" style="height: 45px">
											<img 
												src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png" 
												width="1" 
												height="1" 
												border="0" 
												style="display: block; border: none" 
											/>
										</td>
									</tr>
									<tr>
										<td align="center">
											<table 
												role="presentation"
												border="0" 
												cellpadding="0" 
												cellspacing="0" 
												width="440" 
												style="max-width: 440px;
													border-spacing: 0; 
													border-collapse: collapse; 
													vertical-align: top;
													margin: 0;
													width: 100%;"
											>
												<tr>
													<td width="70" style="width: 70px">
														<img 
															src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png" 
															width="1" 
															height="1" 
															border="0" 
															style="display: block; border: none" 
														/>
													</td>
													<td 
														style="font-family: Arial, Helvetica, sans-serif;
															width: 300px; 
															background-color: #0248FF; 
															background-image: linear-gradient(-45deg, #0248FF, #0069FF); 
															color: #FFF; 
															height: 55px; 
															line-height: 55px; 
															border-radius: 4px; 
															text-align: center; 
															font-weight: bold;"
													>
														<a 
															href="#"
															style="font-family: Arial, Helvetica, sans-serif;
																width: 100%; 
																background-color: #0248FF; 
																background-image: linear-gradient(-45deg, #0248FF, #0069FF); 
																color: #FFF; 
																height: 55px; 
																line-height: 55px; 
																border-radius: 4px; 
																text-align: center; 
																font-weight: bold; 
																display: block; 
																text-decoration: none;
																cursor: pointer;"
														>
															Change password
														</a>
													</td>
													<td width="70" style="width: 70px">
														<img 
															src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png" 
															width="1" 
															height="1" 
															border="0" 
															style="display: block; border: none" 
														/>
													</td>
												</tr>
											</table>	
										</td>
									</tr>
									<tr>
										<td height="45" style="height: 45px">
											<img 
												src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png" 
												width="1" 
												height="1" 
												border="0" 
												style="display: block; border: none" 
											/>
										</td>
									</tr>
									<tr>
										<td>
											<p 
												style="font-family: Arial, Helvetica, sans-serif; 
													font-size: 15px; 
													color: #5B6987; 
													margin: 0; 
													padding: 0; 
													line-height: 20px;"
											>
												El Equipo de <strong style="font-weight: bold; color: #010E28">Nanny's</strong>.
											</p>
										</td>
									</tr>
									<tr>
										<td height="30" style="height: 30px">
											<img 
												src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png" 
												width="1" 
												height="1" 
												border="0" 
												style="display: block; border: none" 
											/>	
										</td>
									</tr>
									<tr>
										<td>
											<p 
												style="font-family: Arial, Helvetica, sans-serif; 
													font-size: 12px; 
													color: #5B6987; 
													margin: 0; 
													padding: 0; 
													line-height: 20px; 
													text-align: left;"
											>
												Si tienes problemas dandole click al boton, puedes copiar y pegar el Link de Abajo en tu navegador
											</p>
										</td>
									</tr>
									<tr>
										<td height="10" style="height: 10px">
											<img 
												src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png" 
												width="1" 
												height="1" 
												border="0" 
												style="display: block; border: none" 
											/>	
										</td>
									</tr>
									<tr>
										<td>
											<p 
												style="font-family: Arial, Helvetica, sans-serif; 
													font-size: 12px; 
													color: #5B6987; 
													margin: 0; 
													padding: 0; 
													line-height: 20px; 
													text-align: left;"
											>
												${url}
											</p>
										</td>
									</tr>
								</table>	
								<!-- 
									| END / content container 
								-->
							</td>
						</tr>
						<tr>
							<td height="40" style="height:40px">
								<img 
									src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png" 
									width="1" 
									height="1" 
									border="0" 
									style="display: block; border: none" 
								/>	
							</td>
						</tr>
					</table>	
					<!-- 
						| END / email wrapper
					-->


				</td>
			</tr>
			<tr>
				<td height="40">
					<img 
						src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png" 
						width="1" 
						height="1" 
						border="0" 
						style="display: block; border: none" 
					/>	
				</td>
			</tr>
		</table>
		<!-- 
			| END / email container
		-->

  </body>
</html>`)
/**
 * create the google auth with the given credentials
 * @returns {OAuth2Client}
 */
const getGoogleOAuthClient=()=>{
	const {clientId,clientSecret,redirectUri,refreshToken}=currentEnvironment.GOOGLE_OAUTH2
	const oAuth2Client= new google.auth.OAuth2({clientId,clientSecret,redirectUri})
	oAuth2Client.setCredentials({refresh_token:refreshToken})
	return oAuth2Client
}
async function initNodeMailer() {

	// create reusable transporter object using the default SMTP transport
	const {clientId,clientSecret,refreshToken}=currentEnvironment.GOOGLE_OAUTH2
	const oAuth2Client= getGoogleOAuthClient()
	let transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,// true for 465, false for other ports
		secure: true,
		auth: {
		  type: "OAuth2",
		  user: "nannysapp1@gmail.com",
		  clientId,
		  clientSecret,
		  refreshToken,
		  accessToken: oAuth2Client.getAccessToken(),
		},
	});

	return transporter;
}
/**
 * 
 * @param {*} email The Destination Email of the password recovery
 * @param {*} url The url to be sent in the email
 */
 const sendRecoverPasswordMailTo = async (email,url) => {
	// send mail with defined transport object
    
	const transporter = await initNodeMailer();
	
    const mail={
		from: '"Nannys Team" <nannysapp1@gmail.com>', // sender address
		to: `${email}`, // list of receivers
		subject: "Recuperacion de Contraseña ✔", // Subject line
		html: getMailTemplate(url), // html body
	}
	let info = await transporter.sendMail(mail);
    console.log({info});
};
module.exports={
    sendRecoverPasswordMailTo
}