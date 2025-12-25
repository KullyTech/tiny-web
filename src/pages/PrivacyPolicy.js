import React from 'react';
import { Helmet } from 'react-helmet-async';
import './../styles/LegalStyles.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page-container">
      <Helmet>
        <title>Privacy Policy - Tiny Miracle</title>
        <meta name="description" content="Privacy Policy for Tiny Miracle App. Learn how we protect your data and ensure your privacy." />
        <link rel="canonical" href="https://tinymiracle.life/privacy-policy" />
        <meta name="robots" content="noindex" />
      </Helmet>
      <a href="/" className="back-link">← Back to Home</a>

      <h1>PRIVACY POLICY</h1>

      <div className="legal-meta">
        <p><strong>Last Updated:</strong> November 25, 2025</p>
        <p><strong>Effective Date:</strong> November 25, 2025</p>
      </div>

      <hr />

      <h2>TABLE OF CONTENTS</h2>
      <ol>
        <li>Introduction</li>
        <li>Key Points Summary</li>
        <li>Definitions</li>
        <li>Scope and Application</li>
        <li>Information We Collect</li>
        <li>How We Use Your Information</li>
        <li>Analytics and Consent</li>
        <li>Data Storage and Security</li>
        <li>Data Sharing and Disclosure</li>
        <li>International Data Transfers</li>
        <li>Data Retention</li>
        <li>Your Rights and Choices</li>
        <li>HealthKit and Health Data Compliance</li>
        <li>Cookies, Tracking, and Analytics</li>
        <li>Not a Medical Device - Important Disclaimer</li>
        <li>Changes to This Privacy Policy</li>
        <li>Contact Us</li>
        <li>Governing Law and Dispute Resolution</li>
        <li>Accessibility and Language</li>
      </ol>

      <hr />

      <h2>1. INTRODUCTION</h2>
      <p>This Privacy Policy describes how Team Miracle ("we," "us," or "our") collects, uses, stores, and protects your personal information when you use the Tiny - Fetal Heartbeat mobile application (the "App").</p>

      <p><strong>Developer Information:</strong></p>
      <ul>
        <li><strong>Team Name:</strong> Team Miracle</li>
        <li><strong>App Name:</strong> Tiny - Fetal Heartbeat</li>
        <li><strong>Contact Email:</strong> tinybymiracle@gmail.com</li>
        <li><strong>Contact Phone:</strong> +62 822-9046-2070</li>
        <li><strong>Location:</strong> Jakarta, Indonesia</li>
      </ul>
      <p>By using the App, you agree to the collection and use of information in accordance with this Privacy Policy.</p>

      <hr />

      <h2>2. KEY POINTS SUMMARY</h2>
      <p><strong>For users who want a quick overview:</strong></p>
      <ul>
        <li><strong>What we collect:</strong> Name, email (via Apple Sign-In), gestational age, fetal heartbeat recordings (stored on your device only), heart rate from HealthKit (stored on your device only), device information, and app usage data</li>
        <li><strong>How we use it:</strong> To provide pregnancy tracking features, sync your data via iCloud, display health metrics, and improve the app through analytics</li>
        <li><strong>Analytics:</strong> Firebase Analytics runs by default with privacy protections (IP anonymization, no ad personalization). You can disable it anytime in app settings</li>
        <li><strong>No selling:</strong> We never sell your data. Period.</li>
        <li><strong>Health data:</strong> HealthKit data stays on your device. Recordings stay on your device (or your personal iCloud if you enable sync)</li>
        <li><strong>Not medical:</strong> This app is for emotional bonding only, not medical diagnosis</li>
        <li><strong>Your control:</strong> Delete your account anytime. Companion access can be revoked instantly</li>
        <li><strong>Data deletion:</strong> 30-day inactivity triggers account deletion (you'll get a 7-day warning)</li>
        <li><strong>International:</strong> Data may be processed in Asia-Pacific (Firebase) and US (Apple services)</li>
        <li><strong>Your rights:</strong> Access, delete, correct, export your data. Contact us at tinybymiracle@gmail.com</li>
      </ul>
      <p>For complete details, please read the full policy below.</p>

      <hr />

      <h2>3. DEFINITIONS</h2>
      <p>For purposes of this Privacy Policy:</p>
      <ul>
        <li><strong>"Personal Information"</strong> means any information relating to an identified or identifiable natural person.</li>
        <li><strong>"Processing"</strong> means any operation performed on personal data, including collection, storage, use, disclosure, or deletion.</li>
        <li><strong>"Data Controller"</strong> means Team Miracle, which determines the purposes and means of processing personal data.</li>
        <li><strong>"Data Processor"</strong> means any third party that processes data on behalf of Team Miracle.</li>
        <li><strong>"Sensitive Personal Data"</strong> means personal data revealing health information, including fetal heartbeat recordings and heart rate data.</li>
        <li><strong>"EEA"</strong> means the European Economic Area.</li>
        <li><strong>"User"</strong> means any person who downloads and uses the App.</li>
        <li><strong>"GPC (Global Privacy Control)"</strong> means a browser/app signal indicating user preference to opt out of data selling or sharing for advertising.</li>
        <li><strong>"SCCs (Standard Contractual Clauses)"</strong> means EU-approved data transfer agreements ensuring GDPR-level protection when data moves outside the EEA.</li>
        <li><strong>"UK IDTA (International Data Transfer Agreement)"</strong> means the UK's version of SCCs for data transfers post-Brexit.</li>
      </ul>

      <hr />

      <h2>4. SCOPE AND APPLICATION</h2>
      <p>This Privacy Policy applies to:</p>
      <ul>
        <li>Users worldwide, with specific provisions for residents of the European Economic Area (EEA), United Kingdom (UK), California (USA), and Indonesia</li>
        <li>All versions of the Tiny - Fetal Heartbeat App on iOS devices</li>
        <li>Data collected through the App, including via Apple Watch</li>
      </ul>

      <p><strong>Target Markets:</strong><br />
        We primarily target users in Indonesia and do not actively market to EEA/UK residents. However, if you are an EEA/UK resident using our app, this policy and your regional rights apply. As our user base grows, we commit to implementing Standard Contractual Clauses (SCCs) and UK IDTA where required, and appointing EU/UK representatives if we reach the scale that necessitates it.</p>

      <p><strong>Age Restrictions:</strong><br />
        The App is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13.</p>

      <p><strong>Children Safeguards:</strong><br />
        If we discover or are notified that a child under 13 has created an account:</p>
      <ol>
        <li>We will immediately disable the account and prevent further access</li>
        <li>We will contact the email address on file to verify the user's age</li>
        <li>Upon verification that the user is under 13, we will permanently delete all associated data within 48 hours</li>
        <li>If we cannot verify age within 7 days, we will proceed with account and data deletion</li>
      </ol>
      <p>If you are a parent or guardian and you believe your child has provided us with personal information, please contact us immediately at tinybymiracle@gmail.com with the subject line "Underage Account Concern."</p>

      <hr />

      <h2>5. INFORMATION WE COLLECT</h2>

      <h3>5.1 Information You Provide Directly</h3>
      <p><strong>Account Information:</strong></p>
      <ul>
        <li>Name (for personalization)</li>
        <li>Email address (via Apple Sign-In)</li>
        <li>Apple ID authentication token</li>
        <li>Gestational age information</li>
      </ul>

      <p><strong>Health and Pregnancy Data (Sensitive Personal Data):</strong></p>
      <ul>
        <li>Fetal heartbeat audio recordings (stored locally on your device only)</li>
        <li>Pregnancy journey moments and notes you create</li>
        <li>Gestational age and pregnancy timeline information</li>
      </ul>

      <p><strong>HealthKit Data:</strong></p>
      <ul>
        <li>Heart rate data (read-only access, stored locally on your device only)</li>
        <li>This data is used solely to display health metrics within the App and is never transmitted to our servers or shared with third parties</li>
      </ul>

      <h3>5.2 Information Collected Automatically</h3>
      <p><strong>Device Information:</strong></p>
      <ul>
        <li>Device identifier (for Firebase Analytics and app functionality)</li>
        <li>Operating system version (iOS)</li>
        <li>App version</li>
        <li>Device model (iPhone, Apple Watch)</li>
        <li>Device language and region settings</li>
      </ul>

      <p><strong>Usage Information (Pseudonymized):</strong></p>
      <ul>
        <li>App features accessed</li>
        <li>Session duration and frequency</li>
        <li>In-app interactions and navigation patterns</li>
        <li>Crash reports and error logs (when they occur)</li>
      </ul>

      <p><strong>iCloud Sync Metadata (On-Device Only):</strong></p>
      <ul>
        <li>When you enable iCloud sync, lightweight sync status metadata (sync timestamps, completion flags, conflict resolution data) is processed on your device only</li>
        <li>This metadata is not transmitted to our servers</li>
        <li>It is used solely to coordinate syncing between your devices via Apple's iCloud infrastructure</li>
      </ul>

      <h3>5.3 Information from Apple Services</h3>
      <p><strong>Apple Sign-In:</strong></p>
      <ul>
        <li>Unique user identifier from Apple</li>
        <li>Email address (may be Apple's private relay email)</li>
        <li>Authentication status</li>
      </ul>

      <p><strong>iCloud Sync:</strong></p>
      <ul>
        <li>When enabled, your pregnancy journey data (moments, notes, recordings) is stored in your personal iCloud account</li>
        <li>We do not have access to your iCloud data; it is encrypted and controlled by Apple</li>
        <li>CloudKit encryption keys are managed entirely by Apple, not by us</li>
      </ul>

      <p><strong>Apple Watch Integration:</strong></p>
      <ul>
        <li>Device pairing status</li>
        <li>Watch OS version</li>
        <li>Synced app data between iPhone and Apple Watch</li>
      </ul>

      <hr />

      <h2>6. HOW WE USE YOUR INFORMATION</h2>

      <h3>6.1 Legal Bases for Processing (GDPR)</h3>
      <p>We process your personal information based on the following legal grounds:</p>
      <p><strong>Consent:</strong></p>
      <ul>
        <li>Accessing HealthKit data (heart rate)</li>
        <li>Creating and storing fetal heartbeat recordings</li>
        <li>Syncing data via iCloud</li>
        <li>Analytics and app improvement (with opt-out available)</li>
      </ul>
      <p><strong>Contractual Necessity:</strong></p>
      <ul>
        <li>Creating and managing your account</li>
        <li>Providing core app functionality</li>
        <li>Enabling companion account features</li>
      </ul>
      <p><strong>Legitimate Interests:</strong></p>
      <ul>
        <li>Improving app performance and user experience</li>
        <li>Detecting and preventing technical issues</li>
        <li>Ensuring app security</li>
      </ul>

      <h3>6.2 Specific Purposes</h3>
      <p>We use your information for the following purposes:</p>
      <p><strong>Account Management:</strong></p>
      <ul>
        <li>Create and maintain your user account (main and companion accounts)</li>
        <li>Authenticate your identity via Apple Sign-In</li>
        <li>Enable account recovery and security features</li>
      </ul>
      <p><strong>Core App Functionality:</strong></p>
      <ul>
        <li>Record, store, and playback fetal heartbeat audio</li>
        <li>Display pregnancy journey timeline and moments</li>
        <li>Sync data across your devices via iCloud (with your consent)</li>
        <li>Enable sharing between main account (expecting mother) and companion account (partner)</li>
      </ul>
      <p><strong>Health Features:</strong></p>
      <ul>
        <li>Display heart rate data from HealthKit within the app</li>
        <li>Provide pregnancy tracking and milestone features</li>
        <li><strong>Important:</strong> HealthKit data is used ONLY to provide health and wellness features in the App. We do NOT use HealthKit data for advertising, marketing, data mining, or any other purpose.</li>
      </ul>
      <p><strong>App Improvement and Analytics:</strong></p>
      <ul>
        <li>Analyze app usage patterns to improve features (via Firebase Analytics with pseudonymized data)</li>
        <li>Identify and fix technical issues and bugs</li>
        <li>Understand user preferences to enhance user experience</li>
      </ul>
      <p><strong>Communication:</strong></p>
      <ul>
        <li>Send important service announcements and policy updates via email</li>
        <li>Send account activity notifications (inactivity warnings, companion activity alerts)</li>
        <li>Respond to your support requests and inquiries</li>
      </ul>

      <hr />

      <h2>7. ANALYTICS AND CONSENT</h2>

      <h3>7.1 How Analytics Work</h3>
      <p>By default, when you use the App, Firebase Analytics collects pseudonymized usage data to help us understand how the app is used and improve it. This includes:</p>
      <ul>
        <li>Device identifiers (not linked to your name or email)</li>
        <li>App screens visited and features used</li>
        <li>Session duration and frequency</li>
        <li>Technical performance metrics</li>
      </ul>
      <p><strong>Privacy Protections We've Enabled:</strong></p>
      <ul>
        <li>IP Address Anonymization: Enabled</li>
        <li>Google Signals: Disabled</li>
        <li>Ad Personalization: Disabled</li>
        <li>Data Retention: Set to 2 months (shortest available)</li>
      </ul>

      <h3>7.2 Your Control Over Analytics</h3>
      <p><strong>For All Users:</strong><br />
        You can disable analytics at any time through the app:</p>
      <ol>
        <li>Go to <strong>Settings</strong> in the App</li>
        <li>Find <strong>"Analytics"</strong> toggle</li>
        <li>Turn it <strong>Off</strong> to stop sending usage data</li>
      </ol>
      <p><strong>What This Means:</strong></p>
      <ul>
        <li><strong>Enabled (default):</strong> We collect pseudonymized usage data to improve the app. No personal identifiers like your name or email are used.</li>
        <li><strong>Disabled:</strong> The app will not send any usage or analytics data. Core app features will continue to work normally.</li>
      </ul>
      <p><strong>For EEA/UK Residents:</strong><br />
        While analytics run by default, we want to be transparent:</p>
      <ul>
        <li>Device identifiers are used, which can be considered personal data under GDPR</li>
        <li>You have the right to opt out at any time using the in-app toggle</li>
        <li>Disabling analytics does not affect any app functionality</li>
        <li>Your choice is stored locally on your device and persists across app updates</li>
      </ul>
      <p><strong>Note:</strong> Even with analytics disabled, we may still collect minimal technical data necessary for app operation (authentication tokens, crash prevention), but this is not used for analytics purposes.</p>

      <hr />

      <h2>8. DATA STORAGE AND SECURITY</h2>

      <h3>8.1 Where Your Data is Stored</h3>
      <p><strong>On-Device Storage (Local):</strong></p>
      <ul>
        <li>Fetal heartbeat audio recordings are stored exclusively on your iPhone</li>
        <li>HealthKit data remains in Apple's Health app on your device</li>
        <li>App settings and preferences</li>
        <li>iCloud sync status metadata (processed on-device only, not transmitted to servers)</li>
      </ul>
      <p><strong>iCloud Storage (Optional):</strong></p>
      <ul>
        <li>When you enable iCloud sync, your pregnancy journey data (moments, notes, recordings) is stored in your personal iCloud account</li>
        <li>This data is encrypted by Apple using industry-standard encryption</li>
        <li>CloudKit encryption keys are managed entirely by Apple; we do not operate or have access to client-side end-to-end encryption keys</li>
        <li>We do not have access to your iCloud data; only you control it through your Apple ID</li>
      </ul>
      <p><strong>Firebase/Cloud Storage:</strong></p>
      <ul>
        <li>Account authentication tokens</li>
        <li>Pseudonymized analytics data (device IDs, usage patterns)</li>
        <li>Data is stored in Firebase servers located in the <strong>Asia-Pacific region</strong></li>
      </ul>

      <h3>8.2 Security Measures</h3>
      <p>We implement appropriate technical and organizational measures to protect your personal information:</p>
      <p><strong>Technical Safeguards:</strong></p>
      <ul>
        <li>Encryption in transit using TLS 1.2 or higher for all data transmissions</li>
        <li>Encryption at rest provided by Apple (iCloud) and Google Cloud Platform (Firebase)</li>
        <li>Secure authentication via Apple Sign-In with token-based access</li>
        <li>Native Apple CloudKit encryption with keys managed by Apple</li>
      </ul>
      <p><strong>Organizational Safeguards:</strong></p>
      <ul>
        <li>Access to personal data is limited to team members who need it for legitimate purposes</li>
        <li>Regular security assessments and updates</li>
        <li>Incident response procedures in place</li>
      </ul>
      <p><strong>Important Clarification:</strong><br />
        We use Apple's default CloudKit encryption for iCloud storage and Firebase's default encryption. Data is encrypted in transit (TLS) and at rest. CloudKit encryption keys are managed by Apple, and we do not implement additional client-side end-to-end encryption beyond Apple's and Firebase's standard protections.</p>

      <h3>8.3 Data Protection Impact Assessment (DPIA)</h3>
      <p>Given that we process sensitive health data (fetal heartbeat recordings, heart rate, pregnancy information), we periodically assess privacy risks and implement appropriate safeguards. As our app evolves and our user base grows, we will conduct formal Data Protection Impact Assessments (DPIAs) and publish summaries of our findings and mitigations when available.</p>

      <h3>8.4 Data Breach Notification</h3>
      <p>In the event of a data breach that poses a risk to your rights and freedoms, we will:</p>
      <ul>
        <li>Notify affected users within 72 hours of becoming aware of the breach (GDPR requirement)</li>
        <li>Notify the relevant supervisory authority as required by law</li>
        <li>Provide information about the nature of the breach and steps being taken to address it</li>
        <li>Offer guidance on steps you can take to protect yourself</li>
        <li>Notification will be sent via email to the address associated with your account</li>
      </ul>

      <hr />

      <h2>9. DATA SHARING AND DISCLOSURE</h2>

      <h3>9.1 We Do Not Sell Your Data</h3>
      <p>We do not sell, rent, or trade your personal information to third parties for monetary or other valuable consideration.</p>

      <h3>9.2 Sharing with Service Providers (Data Processors)</h3>
      <p>We share limited information with trusted third-party service providers who process data on our behalf under strict contractual obligations:</p>
      <p><strong>Firebase (Google LLC):</strong></p>
      <ul>
        <li><strong>Purpose:</strong> App analytics, authentication, and cloud infrastructure</li>
        <li><strong>Data Shared:</strong> Pseudonymized device identifiers, app usage events, authentication tokens</li>
        <li><strong>Configuration:</strong>
          <ul>
            <li>Google Signals: Disabled</li>
            <li>Ad Personalization: Disabled</li>
            <li>IP Anonymization: Enabled</li>
            <li>Data Retention: Set to 2 months (shortest available)</li>
          </ul>
        </li>
        <li><strong>What is NOT shared:</strong> Your name, email, fetal heartbeat recordings, HealthKit data, or any personally identifiable health information</li>
        <li><strong>Privacy Policy:</strong> <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">https://firebase.google.com/support/privacy</a></li>
        <li><strong>Location:</strong> Data stored in Asia-Pacific region servers</li>
        <li><strong>Redundancy:</strong> Data may be redundantly stored by Google across multiple geographic locations for reliability and disaster recovery purposes</li>
      </ul>

      <p><strong>Apple Inc.:</strong></p>
      <ul>
        <li><strong>Purpose:</strong> Authentication (Apple Sign-In), cloud storage (iCloud), device integration (Apple Watch), health data (HealthKit)</li>
        <li><strong>Data Shared:</strong>
          <ul>
            <li>Apple Sign-In: Authentication token, email (or private relay email)</li>
            <li>iCloud: User-created content (moments, notes, recordings) stored in your personal iCloud account</li>
            <li>HealthKit: Heart rate data (read-only, remains on device)</li>
          </ul>
        </li>
        <li><strong>Your Control:</strong> You control iCloud and HealthKit access through iOS settings</li>
        <li><strong>Privacy Policy:</strong> <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">https://www.apple.com/legal/privacy/</a></li>
        <li><strong>Location:</strong> Apple services may process data in the United States and other countries where Apple operates</li>
      </ul>

      <p><strong>SDK Registry:</strong><br />
        We currently use only Firebase and Apple system frameworks (CloudKit, HealthKit, Sign-In with Apple). We do not integrate any additional third-party SDKs, advertising networks, or tracking libraries. If we add new SDKs in the future, we will update this section and notify users via email.</p>
      <p><strong>Important:</strong> Firebase Analytics data is pseudonymized, meaning it uses device identifiers rather than your name or email. However, this is not fully anonymous data, as device IDs can potentially be linked to individuals. We have configured Firebase to maximize privacy by disabling ad personalization, enabling IP anonymization, and minimizing data retention.</p>

      <h3>9.3 Companion Account Sharing</h3>
      <p>When you add a companion account (partner):</p>
      <ul>
        <li>The companion can view and read all pregnancy moments and recordings you create</li>
        <li>The companion can create new moments that you can see</li>
        <li>The companion can share moments through the app's sharing features</li>
        <li><strong>The companion can export recordings and moments to their local device</strong> through standard iOS sharing (save to Files, share via Messages, etc.)</li>
        <li>The companion cannot delete your data or moments</li>
        <li>If the companion saves or exports recordings to their local device before you revoke access, they retain those local copies</li>
        <li><strong>Revoking companion access does not delete content the companion has already exported or saved locally</strong></li>
        <li>You can revoke companion access at any time through app settings, which immediately logs out the companion from all devices</li>
        <li>No notification is sent to the companion when access is revoked</li>
      </ul>
      <p><strong>Companion Export Notifications (Optional Feature):</strong></p>
      <ul>
        <li>If technically feasible in a future update, we will add an optional alert that notifies the main account when a companion exports or shares content</li>
        <li>You will be able to view a simple audit log of companion activity (what was viewed, shared, or exported) in the app settings</li>
      </ul>
      <p><strong>Privacy and Safety Notice:</strong> Be cautious when granting companion access. Only share access with trusted partners. If you are in a situation where sharing may compromise your safety or privacy, do not enable companion features. Revoking access prevents future access but does not delete content already saved by the companion.</p>

      <h3>9.4 Legal Requirements</h3>
      <p>We may disclose your information if required to do so by law or in response to:</p>
      <ul>
        <li>Valid legal process (court orders, subpoenas, warrants)</li>
        <li>Requests from law enforcement or government authorities</li>
        <li>Protection of our legal rights, property, or safety</li>
        <li>Prevention of fraud, security threats, or illegal activity</li>
      </ul>

      <hr />

      <h2>10. INTERNATIONAL DATA TRANSFERS</h2>

      <h3>10.1 Cross-Border Transfers</h3>
      <p>Your personal information may be transferred to and processed in countries other than your country of residence, including:</p>
      <ul>
        <li><strong>United States:</strong> Apple Inc. (authentication services, iCloud infrastructure, HealthKit framework)</li>
        <li><strong>Asia-Pacific Region:</strong> Firebase/Google Cloud Platform (analytics, cloud infrastructure)</li>
        <li><strong>Multiple Locations:</strong> Data may be redundantly stored by Google across geographic regions for reliability and disaster recovery</li>
      </ul>
      <p>These countries may have data protection laws that differ from those in your jurisdiction.</p>

      <h3>10.2 Safeguards for Transfers</h3>
      <p>When we transfer personal data outside your jurisdiction, we implement appropriate safeguards:</p>
      <p><strong>For EEA/UK Residents:</strong></p>
      <ul>
        <li>We rely on Apple's and Google's compliance with <strong>Standard Contractual Clauses (SCCs)</strong> approved by the European Commission for EEA transfers</li>
        <li>We rely on the <strong>UK International Data Transfer Agreement (UK IDTA)</strong> for UK transfers, which is the UK's equivalent of SCCs post-Brexit</li>
        <li>Apple Privacy Policy: <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">https://www.apple.com/legal/privacy/</a></li>
        <li>Google Cloud Data Processing Terms: <a href="https://cloud.google.com/terms/data-processing-addendum" target="_blank" rel="noopener noreferrer">https://cloud.google.com/terms/data-processing-addendum</a></li>
      </ul>
      <p><strong>What are SCCs and UK IDTA?</strong></p>
      <ul>
        <li><strong>SCCs (Standard Contractual Clauses):</strong> Pre-approved contracts between data exporters and importers that ensure GDPR-level protection when data moves outside the EEA</li>
        <li><strong>UK IDTA (International Data Transfer Agreement):</strong> The UK's version of SCCs, used for transfers from the UK post-Brexit</li>
      </ul>
      <p><strong>For Indonesia Residents:</strong></p>
      <ul>
        <li>We ensure third-party processors comply with international data protection standards</li>
        <li>Data transfers are necessary for providing the app services you have requested</li>
      </ul>

      <h3>10.3 EU/UK Representative</h3>
      <p>At this time, we do not actively target or market to EEA/UK residents, and we do not have a designated EU or UK Representative. However:</p>
      <ul>
        <li>If you are an EEA/UK resident using our app, your data protection rights under GDPR and UK GDPR fully apply</li>
        <li>We commit to implementing SCCs and UK IDTA for all data transfers involving EEA/UK residents</li>
        <li>If our EEA/UK user base grows significantly, we will appoint formal EU and UK Representatives as required by law</li>
        <li>For privacy inquiries from EEA/UK residents, please contact us directly at tinybymiracle@gmail.com</li>
      </ul>

      <hr />

      <h2>11. DATA RETENTION</h2>

      <h3>11.1 Active Accounts</h3>
      <p>While your account is active, we retain your data to provide app functionality:</p>
      <ul>
        <li>Account information: Retained while account is active</li>
        <li>Pregnancy journey data: Retained while account is active and as long as stored in your iCloud</li>
        <li>HealthKit data: Never stored by us; always remains only on your device in Apple's Health app</li>
        <li>Analytics data: Retained for 2 months by Firebase, then automatically deleted</li>
      </ul>

      <h3>11.2 Account Deletion and Inactivity</h3>
      <p><strong>User-Initiated Deletion:</strong><br />
        When you delete your account through the app:</p>
      <ul>
        <li>Account information is immediately marked for deletion</li>
        <li>All data stored on our servers is deleted within 30 days</li>
        <li>iCloud data remains in your iCloud account until you manually delete it through iOS settings or iCloud.com</li>
        <li>On-device data (recordings, HealthKit data) remains on your device until you delete the app</li>
      </ul>
      <p><strong>Automatic Deletion After Inactivity:</strong><br />
        If you do not log in to your account from any device for <strong>30 consecutive days</strong>, your account will be automatically deleted. Here's how it works:</p>
      <p><strong>Day 23 (7-day warning):</strong></p>
      <ul>
        <li>You will receive an email notification at your account email address</li>
        <li>You will see an in-app banner (if you open the app) warning: "Your account will be deleted in 7 days due to inactivity. Tap here to keep your account active."</li>
        <li>The email will include a "Keep my account active" button</li>
      </ul>
      <p><strong>To Keep Your Account Active:</strong></p>
      <ul>
        <li>Open the app and log in (automatically resets the inactivity timer)</li>
        <li>Click the "Keep my account active" button in the email or in-app banner</li>
        <li>This resets the 30-day countdown to zero</li>
      </ul>
      <p><strong>Day 30 (if no action taken):</strong></p>
      <ul>
        <li>Your account and all server-stored data will be permanently deleted</li>
        <li>You will receive a final confirmation email notifying you that your account has been deleted</li>
        <li>Deletion is permanent and cannot be undone</li>
      </ul>
      <p><strong>What Persists After Deletion:</strong></p>
      <ul>
        <li>Server logs: Retained for up to 90 days for security and legal compliance purposes, then permanently deleted</li>
        <li>Firebase Analytics: Pseudonymized device events may persist for up to 2 months per Firebase's retention settings</li>
        <li>Backups: Deleted data may persist in system backups for up to 90 days, after which backups are overwritten</li>
        <li>iCloud backups: If you have iCloud backups of your device, recordings and app data may persist in those backups until you delete them through iCloud settings</li>
        <li>Companion-exported content: Any recordings or moments exported or saved locally by companions before revocation will remain on their devices</li>
      </ul>

      <h3>11.3 Legal Holds</h3>
      <p>In rare cases, we may be required to retain data longer if subject to legal holds, litigation, or regulatory investigation. We will notify you if your data is subject to a legal hold unless prohibited by law.</p>

      <hr />

      <h2>12. YOUR RIGHTS AND CHOICES</h2>

      <h3>12.1 Rights for All Users</h3>
      <p><strong>Access Your Data:</strong></p>
      <ul>
        <li>You can view all your pregnancy journey data within the app</li>
        <li>Request a copy of data we hold about you by contacting tinybymiracle@gmail.com</li>
      </ul>
      <p><strong>Delete Your Data:</strong></p>
      <ul>
        <li>Delete your account and data through the app's account settings</li>
        <li>Request deletion by emailing tinybymiracle@gmail.com</li>
      </ul>
      <p><strong>Control Companion Access:</strong></p>
      <ul>
        <li>Add or remove companion accounts at any time through app settings</li>
        <li>Revoke companion access immediately without notice</li>
        <li>View companion activity audit log (when feature is available)</li>
      </ul>
      <p><strong>Control Data Syncing:</strong></p>
      <ul>
        <li>Disable iCloud sync through app settings or iOS system settings</li>
        <li>Disable HealthKit access through iOS Settings &gt; Privacy &amp; Security &gt; Health &gt; Tiny</li>
      </ul>
      <p><strong>Control Analytics:</strong></p>
      <ul>
        <li>Disable Firebase Analytics through app Settings &gt; Analytics toggle</li>
        <li>Your choice is respected immediately and persists across app updates</li>
      </ul>
      <p><strong>Withdraw Consent:</strong></p>
      <ul>
        <li>You may withdraw consent for data processing at any time</li>
        <li>Note that withdrawing consent may limit or prevent use of certain app features</li>
      </ul>

      <h3>12.2 Rights for EEA Residents (GDPR)</h3>
      <p>If you are located in the European Economic Area, you have additional rights:</p>
      <ul>
        <li><strong>Right to Access:</strong> Obtain confirmation of whether we process your personal data and receive a copy of it.</li>
        <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete personal data.</li>
        <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> Request deletion of your personal data under certain circumstances.</li>
        <li><strong>Right to Restrict Processing:</strong> Request limitation of processing under certain conditions.</li>
        <li><strong>Right to Data Portability:</strong> Receive your personal data in a machine-readable format.</li>
        <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or direct marketing.</li>
        <li><strong>Right to Lodge a Complaint:</strong> File a complaint with your local data protection authority.</li>
      </ul>
      <p><strong>Automated Decision-Making:</strong> We do not use automated decision-making or profiling that produces legal or similarly significant effects.</p>

      <h3>12.3 Rights for California Residents (CCPA/CPRA)</h3>
      <p>If you are a California resident, you have the following rights:</p>
      <ul>
        <li><strong>Right to Know:</strong> Request disclosure of categories and specific pieces of personal information collected, purposes, and sharing.</li>
        <li><strong>Right to Delete:</strong> Request deletion of personal information we have collected from you.</li>
        <li><strong>Right to Correct:</strong> Request correction of inaccurate personal information.</li>
        <li><strong>Right to Opt-Out:</strong> We do not "sell" or "share" personal information as defined by CCPA/CPRA.</li>
        <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA/CPRA rights.</li>
        <li><strong>Shine the Light:</strong> Request information about personal information disclosed to third parties for their direct marketing purposes (we do not engage in this practice).</li>
      </ul>

      <h3>12.4 Rights for Indonesia Residents (UU PDP)</h3>
      <p>If you are located in Indonesia, you have rights under the Personal Data Protection Law (UU PDP):</p>
      <ul>
        <li><strong>Right to Access:</strong> Access and obtain copies of your personal data.</li>
        <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete personal data.</li>
        <li><strong>Right to Deletion:</strong> Request deletion of your personal data.</li>
        <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing at any time.</li>
        <li><strong>Right to Object:</strong> Object to certain types of data processing.</li>
        <li><strong>Right to Data Portability:</strong> Request your data in a portable format.</li>
        <li><strong>Right to File Complaints:</strong> File complaints with us first, then with Indonesia's data protection authority if unsatisfied.</li>
      </ul>

      <h3>12.5 How to Exercise Your Rights</h3>
      <p><strong>Submission Process:</strong><br />
        To exercise any of the above rights, contact us at:</p>
      <ul>
        <li><strong>Email:</strong> tinybymiracle@gmail.com</li>
        <li><strong>Phone:</strong> +62 822-9046-2070</li>
      </ul>
      <p><strong>Identity Verification:</strong><br />
        To protect your privacy and security, we will verify your identity before fulfilling requests:</p>
      <ul>
        <li><strong>Primary method:</strong> We will verify your identity through your Apple Sign-In authentication (you'll be asked to log in to the app).</li>
        <li><strong>Fallback method:</strong> If Apple Sign-In verification is unavailable, we will send a verification code to your account email address.</li>
        <li>You may be asked to confirm account details (gestational age information, account creation date).</li>
      </ul>
      <p><strong>Response Timeline:</strong></p>
      <ul>
        <li><strong>GDPR (EEA):</strong> Within 30 days</li>
        <li><strong>CCPA (California):</strong> Within 45 days</li>
        <li><strong>UU PDP (Indonesia):</strong> Within 30 days</li>
      </ul>
      <p><strong>No Fees:</strong> We do not charge fees unless requests are manifestly unfounded, excessive, or repetitive.</p>

      <hr />

      <h2>13. HEALTHKIT AND HEALTH DATA COMPLIANCE</h2>

      <h3>13.1 Apple HealthKit Requirements</h3>
      <p>We comply strictly with Apple's HealthKit guidelines:</p>
      <p><strong>Limited Use of HealthKit Data:</strong></p>
      <ul>
        <li>HealthKit data (heart rate) is used ONLY to provide health and wellness features within the App</li>
        <li>We display your heart rate data to help you track your health during pregnancy</li>
        <li>HealthKit data is stored exclusively on your device in Apple's Health app</li>
      </ul>
      <p><strong>No Prohibited Uses:</strong></p>
      <ul>
        <li>We do NOT use HealthKit data for advertising or marketing purposes</li>
        <li>We do NOT sell, rent, or share HealthKit data with third parties (except for syncing via iCloud, which is controlled by you and Apple)</li>
        <li>We do NOT use HealthKit data for data mining, artificial intelligence training, or machine learning without your explicit consent</li>
        <li>We do NOT disclose HealthKit data to any third party without your explicit authorization</li>
      </ul>
      <p><strong>Your Control:</strong></p>
      <ul>
        <li>You must explicitly grant permission for the App to access HealthKit data</li>
        <li>You can revoke HealthKit access at any time through iOS Settings &gt; Privacy &amp; Security &gt; Health &gt; Tiny</li>
        <li>Revoking access will prevent the app from displaying heart rate data but will not affect other app features</li>
      </ul>

      <h3>13.2 Health Data is Sensitive Personal Data</h3>
      <p>Fetal heartbeat recordings and pregnancy journey information are considered sensitive personal data under GDPR, CCPA, and UU PDP. We implement enhanced protections:</p>
      <ul>
        <li>Recordings are stored locally on your device only (unless you enable iCloud sync)</li>
        <li>Access is protected by device-level security (passcode, Face ID, Touch ID)</li>
        <li>Recordings are not used for any purpose other than providing the core app experience</li>
        <li>You have full control to delete recordings at any time</li>
      </ul>

      <hr />

      <h2>14. COOKIES, TRACKING, AND ANALYTICS</h2>

      <h3>14.1 Tracking Technologies</h3>
      <p>The App does not use traditional web cookies. However, we use similar tracking technologies:</p>
      <p><strong>Firebase SDK Identifiers:</strong></p>
      <ul>
        <li>Firebase Analytics sets pseudonymized device identifiers to track app usage</li>
        <li>These identifiers are used to understand app performance and user behavior patterns</li>
        <li>They are not combined with personal identifiers like your name or email</li>
      </ul>

      <h3>14.2 Analytics Opt-Out</h3>
      <p><strong>For All Users:</strong><br />
        You can opt out of Firebase Analytics at any time:</p>
      <ol>
        <li>Open the App</li>
        <li>Go to <strong>Settings</strong></li>
        <li>Find <strong>"Analytics"</strong> toggle</li>
        <li>Turn it <strong>Off</strong></li>
      </ol>
      <p>Your opt-out choice is stored locally and respected immediately.</p>
      <p><strong>For EEA/UK Users:</strong></p>
      <ul>
        <li>Device identifiers used by Firebase Analytics are considered personal data under GDPR/UK GDPR</li>
        <li>By default, analytics run when you use the app (implied consent through use)</li>
        <li>You can disable analytics at any time through the in-app toggle with no impact on app functionality</li>
        <li>Your opt-out choice persists across app updates and device restarts</li>
      </ul>

      <h3>14.3 Do Not Track (DNT) and Global Privacy Control (GPC)</h3>
      <p><strong>Do Not Track (DNT):</strong></p>
      <ul>
        <li>The App does not currently respond to Do Not Track (DNT) browser signals, as it is a native mobile app, not a website</li>
      </ul>
      <p><strong>Global Privacy Control (GPC):</strong></p>
      <ul>
        <li>GPC is a universal signal indicating your preference to opt out of data selling or sharing for advertising purposes</li>
        <li><strong>We do not sell or share personal data for cross-context behavioral advertising</strong></li>
        <li>If our practices change in the future to include data selling or sharing for advertising, we commit to honoring Global Privacy Control (GPC) signals</li>
      </ul>

      <h3>14.4 Third-Party Analytics Opt-Outs</h3>
      <p><strong>Firebase/Google Analytics:</strong></p>
      <ul>
        <li>Firebase data is pseudonymized and configured with privacy protections</li>
        <li>To limit Google's use of your data across services, visit: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a></li>
      </ul>

      <hr />

      <h2>15. NOT A MEDICAL DEVICE - IMPORTANT DISCLAIMER</h2>
      <p><strong>Tiny - Fetal Heartbeat is NOT a medical device and is not intended for medical use.</strong></p>
      <ul>
        <li>The App is designed solely for emotional bonding and pregnancy journey tracking</li>
        <li>Fetal heartbeat recordings are for personal, non-medical purposes only</li>
        <li>The App does not diagnose, treat, prevent, or cure any medical condition</li>
        <li>The App is not a substitute for professional medical advice, diagnosis, or treatment</li>
        <li>The App has not been evaluated or approved by the U.S. Food and Drug Administration (FDA), the European Medicines Agency (EMA), Indonesia's BPOM, or any other regulatory authority</li>
      </ul>
      <p><strong>Always Seek Professional Medical Care:</strong></p>
      <ul>
        <li>Always consult with your healthcare provider for medical concerns about your pregnancy</li>
        <li>Do not rely on the App for medical decisions or health monitoring</li>
        <li>If you have concerns about your baby's health or heartbeat, contact your doctor or midwife immediately</li>
        <li>In case of emergency, call emergency services or go to the nearest hospital</li>
      </ul>
      <p>By using the App, you acknowledge that it is for emotional and informational purposes only and does not replace medical care.</p>

      <hr />

      <h2>16. CHANGES TO THIS PRIVACY POLICY</h2>

      <h3>16.1 Notification of Changes</h3>
      <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.</p>
      <p><strong>How We Notify You:</strong></p>
      <ul>
        <li><strong>Material changes:</strong> We will notify you via email at the address associated with your account at least 30 days before changes take effect</li>
        <li><strong>Material changes:</strong> We will also display an in-app notification when you next open the app</li>
        <li><strong>Minor changes:</strong> We will update the "Last Updated" date at the top of this policy</li>
      </ul>
      <p><strong>Your Continued Use:</strong><br />
        Your continued use of the App after changes take effect constitutes acceptance of the updated Privacy Policy. If you do not agree with changes, you should stop using the App and delete your account before the changes take effect.</p>

      <h3>16.2 Version History</h3>
      <p>You can request previous versions of this Privacy Policy by contacting tinybymiracle@gmail.com.</p>

      <hr />

      <h2>17. CONTACT US</h2>
      <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
      <p><strong>Team Miracle - Tiny Support</strong></p>
      <ul>
        <li><strong>Email:</strong> tinybymiracle@gmail.com</li>
        <li><strong>Phone:</strong> +62 822-9046-2070</li>
        <li><strong>Location:</strong> Jakarta, Indonesia (virtual team, no physical office)</li>
      </ul>
      <p><strong>For Privacy-Specific Inquiries:</strong><br />
        Email us at tinybymiracle@gmail.com with the subject line "Privacy Inquiry"</p>
      <p><strong>For Data Subject Rights Requests:</strong><br />
        Email us at tinybymiracle@gmail.com with the subject line "Data Rights Request" and specify which right you wish to exercise.</p>
      <p><strong>For EEA/UK Residents:</strong><br />
        While we do not have a formal EU or UK Representative at this time, EEA/UK residents can contact us directly at tinybymiracle@gmail.com for all privacy matters. We commit to responding to all EEA/UK inquiries with the same care and urgency as local requests.</p>
      <p><strong>Response Time:</strong><br />
        We aim to respond to all inquiries within 5 business days and fulfill rights requests within 30 days (or 45 days for CCPA requests).</p>

      <hr />

      <h2>18. GOVERNING LAW AND DISPUTE RESOLUTION</h2>
      <p><strong>Governing Law:</strong><br />
        This Privacy Policy is governed by and construed in accordance with the laws of Indonesia, without regard to its conflict of law provisions.</p>
      <p><strong>Dispute Resolution:</strong></p>
      <ul>
        <li>For Indonesia residents: Disputes will be resolved through mediation in Jakarta, Indonesia before pursuing litigation</li>
        <li>For EEA/UK residents: You retain the right to file complaints with your local data protection authority</li>
        <li>For California residents: You retain all rights under CCPA/CPRA, including the right to pursue legal action</li>
      </ul>

      <hr />

      <h2>19. ACCESSIBILITY AND LANGUAGE</h2>
      <p><strong>Language:</strong><br />
        This Privacy Policy is provided in English. If you need assistance understanding any part of this policy, please contact us at tinybymiracle@gmail.com.</p>
      <p><strong>Accessibility:</strong><br />
        The Tiny - Fetal Heartbeat App follows Apple's Accessibility Guidelines to ensure the app is usable by people with disabilities. We support:</p>
      <ul>
        <li>VoiceOver screen reader</li>
        <li>Dynamic Type for adjustable text sizes</li>
        <li>High contrast and reduced motion options</li>
        <li>Keyboard navigation (where applicable)</li>
      </ul>
      <p>If you encounter accessibility issues or need this Privacy Policy in an alternative format, please contact us at tinybymiracle@gmail.com, and we will provide reasonable accommodations.</p>

      <hr />

      <p><strong>By using Tiny - Fetal Heartbeat, you acknowledge that you have read, understood, and agree to this Privacy Policy.</strong></p>

      <p><em>This Privacy Policy was last updated on November 25, 2025, and is effective immediately for new users and 30 days after notification for existing users.</em></p>
    </div>
  );
};

export default PrivacyPolicy;
