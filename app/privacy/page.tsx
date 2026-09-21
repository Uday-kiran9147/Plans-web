import type { Metadata } from "next";
import { LegalPage, type Section } from "@/components/legal";
import { site } from "@/components/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your information.`,
};

const sections: Section[] = [
  { id: "summary", title: "The short version" },
  { id: "who-we-are", title: "1. Who we are" },
  { id: "what-we-collect", title: "2. Information we collect" },
  { id: "how-we-use", title: "3. How we use it" },
  { id: "location", title: "4. Location data" },
  { id: "notifications", title: "5. Notifications" },
  { id: "sharing", title: "6. When we share information" },
  { id: "processors", title: "7. Service providers" },
  { id: "retention", title: "8. How long we keep it" },
  { id: "rights", title: "9. Your rights and choices" },
  { id: "security", title: "10. Security" },
  { id: "children", title: "11. Children" },
  { id: "transfers", title: "12. International transfers" },
  { id: "changes", title: "13. Changes to this policy" },
  { id: "contact", title: "14. Contact us" },
];

export default function PrivacyPolicy() {
  return (
    <LegalPage
      kind="Privacy"
      title="Privacy Policy"
      intro={`What ${site.name} collects, why it collects it, and the control you keep over it - in plain language.`}
      sections={sections}
    >

      <h2 id="summary">The short version</h2>
      <p>
        {site.name} exists to help you meet people in real life. That needs a small
        amount of information: who you are, roughly where you are, and what you want to
        do. Here is the whole idea in five lines.
      </p>
      <ul>
        <li>
          We collect what the app needs to work, and nothing we cannot justify to you.
        </li>
        <li>
          <strong>We do not sell your personal information</strong>, and we do not share
          it with advertising networks or data brokers.
        </li>
        <li>
          Your precise location is never shown to other users - only approximate
          distance, and only while you choose to appear nearby.
        </li>
        <li>
          Plan chats are temporary by design and are removed after a plan ends, except
          where we must keep a copy for a safety report.
        </li>
        <li>You can export or delete your account and its content at any time.</li>
      </ul>
      <p>
        This summary is for orientation only. The sections below are the operative
        policy.
      </p>

      <h2 id="who-we-are">1. Who we are</h2>
      <p>
        {site.name} (&ldquo;{site.name}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) provides
        the {site.name} mobile application and this website (together, the
        &ldquo;Service&rdquo;). For the purposes of data protection law, the controller
        of your personal information is{" "}
        <strong>[Legal entity name], [registered address]</strong>.
      </p>
      <p>
        This policy applies to everyone who uses the Service. It explains what we do with
        your information and what you can ask us to do with it.
      </p>

      <h2 id="what-we-collect">2. Information we collect</h2>

      <h3>2.1 Information you give us</h3>
      <ul>
        <li>
          <strong>Account details</strong> - your email address and a password (or a sign
          in token from a provider you choose), plus your display name and username.
        </li>
        <li>
          <strong>Profile</strong> - your photo, bio, city, age range and the interests
          you pick during setup. Everything here is optional except a name.
        </li>
        <li>
          <strong>Plans and intent</strong> - the activity, time, place, group size and
          visibility of any plan you create or join.
        </li>
        <li>
          <strong>Messages</strong> - what you write in a plan room or a direct message,
          and any image you send.
        </li>
        <li>
          <strong>Moments</strong> - photos and notes you save after a plan, and the
          people you tag in them.
        </li>
        <li>
          <strong>Support and safety</strong> - what you tell us in an email, a report or
          a block, including the content you report.
        </li>
      </ul>

      <h3>2.2 Information we collect automatically</h3>
      <ul>
        <li>
          <strong>Device and app data</strong> - device model, operating system version,
          app version, language, and a randomly generated installation identifier.
        </li>
        <li>
          <strong>Usage data</strong> - screens opened, features used, plans created or
          joined, and the time of those actions. We use this to understand what works,
          not to profile you.
        </li>
        <li>
          <strong>Approximate location</strong> - only with your permission, and only as
          described in section 4.
        </li>
        <li>
          <strong>Diagnostics</strong> - crash reports and error logs, which may include
          the state of the app at the moment it failed.
        </li>
        <li>
          <strong>Website data</strong> - if you visit this site, basic request logs
          (IP address, browser type, referring page) kept for security and aggregate
          traffic counts.
        </li>
      </ul>

      <h3>2.3 What we do not collect</h3>
      <p>
        We do not collect your contacts, your photo library beyond the images you
        explicitly pick, your call or SMS history, or identifiers used for cross-app
        advertising. We do not embed third-party advertising SDKs.
      </p>

      <h2 id="how-we-use">3. How we use it</h2>
      <table>
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Information used</th>
            <th>Legal basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Create and secure your account</td>
            <td>Account details, device data</td>
            <td>Performance of a contract</td>
          </tr>
          <tr>
            <td>Show plans and people near you</td>
            <td>Approximate location, interests, profile</td>
            <td>Consent (location), contract</td>
          </tr>
          <tr>
            <td>Run plan rooms and messaging</td>
            <td>Messages, plan membership</td>
            <td>Performance of a contract</td>
          </tr>
          <tr>
            <td>Send plan reminders and activity alerts</td>
            <td>Plan times, notification settings</td>
            <td>Consent, legitimate interests</td>
          </tr>
          <tr>
            <td>Keep the community safe</td>
            <td>Reports, blocks, message content, device data</td>
            <td>Legitimate interests, legal obligation</td>
          </tr>
          <tr>
            <td>Fix bugs and improve the app</td>
            <td>Usage data, diagnostics</td>
            <td>Legitimate interests</td>
          </tr>
          <tr>
            <td>Answer your support requests</td>
            <td>Contact details, what you tell us</td>
            <td>Legitimate interests</td>
          </tr>
        </tbody>
      </table>
      <p>
        We do not use your personal information to make decisions about you by automated
        means that produce legal or similarly significant effects.
      </p>

      <h2 id="location">4. Location data</h2>
      <p>
        Location is optional. The app asks for it on a screen that explains what it is
        for, and you can decline or withdraw it at any time in your device settings.
      </p>
      <ul>
        <li>
          <strong>What other people see.</strong> Never your coordinates. Other users see
          a coarse distance (for example, &ldquo;about 2 km away&rdquo;) and the
          neighbourhood or city you chose on your profile.
        </li>
        <li>
          <strong>When we read it.</strong> While you have the app open and are using
          Nearby or discovery. We do not track you in the background.
        </li>
        <li>
          <strong>Plan locations.</strong> The venue you attach to a plan is shared with
          the people who can see that plan. Choose a public meeting place.
        </li>
        <li>
          <strong>If you say no.</strong> The rest of {site.name} keeps working. You can
          still create and join plans by invite, search and interest.
        </li>
      </ul>

      <h2 id="notifications">5. Notifications</h2>
      <p>
        Plan reminders are scheduled locally on your device, which is why they work
        offline and survive a restart. Alerts about activity (someone joined your plan, a
        host accepted you, a new message) are delivered through the platform push
        service.
      </p>
      <p>
        You can turn notifications off in the app or in your device settings without
        losing access to anything - every alert is also written to the in-app inbox.
      </p>

      <h2 id="sharing">6. When we share information</h2>
      <ul>
        <li>
          <strong>With other users</strong>, as the product requires: your profile,
          your plans within their chosen visibility, and your messages within a plan room.
        </li>
        <li>
          <strong>With service providers</strong> who process data on our behalf under
          contract (section 7).
        </li>
        <li>
          <strong>For safety and law</strong>, where we reasonably believe disclosure is
          necessary to comply with a valid legal request, enforce our terms, or protect
          the rights, property or safety of a person.
        </li>
        <li>
          <strong>In a business transfer</strong>, if {site.name} is involved in a merger,
          acquisition or sale of assets. We will tell you before your information becomes
          subject to a different policy.
        </li>
      </ul>
      <p>
        <strong>We never sell your personal information</strong> and we do not share it
        for cross-context behavioural advertising.
      </p>

      <h2 id="processors">7. Service providers</h2>
      <p>
        We keep the list of processors short. Today it covers cloud hosting and database
        storage, authentication, crash reporting and analytics, push delivery, and email
        for support and account mail. These providers act on our instructions and may not
        use your information for their own purposes.
      </p>
      <p>
        A current list of our sub-processors, with the category of data each one handles,
        is available on request at{" "}
        <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>.
      </p>

      <h2 id="retention">8. How long we keep it</h2>
      <ul>
        <li>
          <strong>Account and profile</strong> - while your account is active.
        </li>
        <li>
          <strong>Plans</strong> - for a limited period after the plan ends, so it can
          appear in your history and support any related report.
        </li>
        <li>
          <strong>Plan room messages</strong> - deleted shortly after the plan ends,
          unless preserved for a safety report or a legal obligation.
        </li>
        <li>
          <strong>Moments</strong> - until you delete them or delete your account.
        </li>
        <li>
          <strong>Diagnostics and logs</strong> - typically up to 90 days.
        </li>
        <li>
          <strong>Safety and moderation records</strong> - kept longer where needed to
          prevent a banned user from returning or to meet a legal requirement.
        </li>
      </ul>
      <p>
        When you delete your account we remove or anonymise your personal information
        within 30 days, other than what we must keep for the reasons above. Backups roll
        off on their own schedule.
      </p>

      <h2 id="rights">9. Your rights and choices</h2>
      <p>
        Depending on where you live, you may have the right to access, correct, delete,
        export or restrict the use of your personal information, to object to processing
        based on legitimate interests, and to withdraw consent at any time. You can also
        complain to your local data protection authority.
      </p>
      <p>In the app you can, at any time:</p>
      <ul>
        <li>edit or remove anything on your profile;</li>
        <li>delete a plan, a message you sent, or a moment;</li>
        <li>block or report another user;</li>
        <li>turn location and notification permissions on or off;</li>
        <li>request an export of your data, or delete your account outright.</li>
      </ul>
      <p>
        To make a request by email, write to{" "}
        <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>. We answer within
        30 days and may need to verify that the account is yours.
      </p>

      <h2 id="security">10. Security</h2>
      <p>
        Data is encrypted in transit and at rest. Access to production systems is limited
        to the people who need it, protected by multi-factor authentication, and logged.
        Passwords are stored only as salted hashes by our authentication provider.
      </p>
      <p>
        No system is perfectly secure. If a breach affects your personal information, we
        will notify you and the relevant authority as required by law.
      </p>

      <h2 id="children">11. Children</h2>
      <p>
        {site.name} is not for children. You must be at least 18 years old to use the
        Service. We do not knowingly collect information from anyone under that age, and
        we delete such accounts when we find them. If you believe a child has given us
        information, contact us and we will remove it.
      </p>

      <h2 id="transfers">12. International transfers</h2>
      <p>
        We operate from {site.jurisdiction} and use cloud infrastructure that may store or
        process data in other countries. Where information leaves the country it was
        collected in, we rely on appropriate safeguards - such as standard contractual
        clauses - to protect it.
      </p>

      <h2 id="changes">13. Changes to this policy</h2>
      <p>
        We update this policy when the product or the law changes. The date at the top
        always reflects the current version. For material changes we will notify you in
        the app or by email before they take effect, and where required we will ask for
        your consent again.
      </p>

      <h2 id="contact">14. Contact us</h2>
      <p>
        Privacy questions, data requests and everything else:{" "}
        <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>
        <br />
      </p>
    </LegalPage>
  );
}
