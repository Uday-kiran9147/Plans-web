import type { Metadata } from "next";
import { LegalPage, TemplateNotice, type Section } from "@/components/legal";
import { site } from "@/components/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The agreement between you and ${site.name} when you use the app.`,
};

const sections: Section[] = [
  { id: "agreement", title: "1. This agreement" },
  { id: "eligibility", title: "2. Who can use Plans" },
  { id: "account", title: "3. Your account" },
  { id: "using", title: "4. Using the Service" },
  { id: "conduct", title: "5. Rules of conduct" },
  { id: "meeting", title: "6. Meeting people in person" },
  { id: "content", title: "7. Your content" },
  { id: "plans", title: "8. Plans, hosting and attendance" },
  { id: "safety", title: "9. Reporting, blocking and moderation" },
  { id: "fees", title: "10. Fees" },
  { id: "ip", title: "11. Our intellectual property" },
  { id: "third-party", title: "12. Third-party services" },
  { id: "availability", title: "13. Availability and changes" },
  { id: "termination", title: "14. Suspension and termination" },
  { id: "disclaimer", title: "15. Disclaimers" },
  { id: "liability", title: "16. Limitation of liability" },
  { id: "indemnity", title: "17. Indemnity" },
  { id: "law", title: "18. Governing law and disputes" },
  { id: "misc", title: "19. General terms" },
  { id: "contact", title: "20. Contact" },
];

export default function Terms() {
  return (
    <LegalPage
      kind="Terms"
      title="Terms & Conditions"
      intro={`The agreement between you and ${site.name}. It covers what you can expect from us, and what we expect from you.`}
      sections={sections}
    >
      <TemplateNotice />

      <h2 id="agreement">1. This agreement</h2>
      <p>
        These Terms &amp; Conditions (the &ldquo;Terms&rdquo;) are a binding agreement
        between you and <strong>[Legal entity name]</strong> (&ldquo;{site.name}&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;), covering the {site.name} mobile application
        and this website (the &ldquo;Service&rdquo;).
      </p>
      <p>
        By creating an account or using the Service you accept these Terms and our{" "}
        <a href="/privacy">Privacy Policy</a>. If you do not agree with them, please do
        not use the Service.
      </p>

      <h2 id="eligibility">2. Who can use Plans</h2>
      <ul>
        <li>You must be at least 18 years old.</li>
        <li>
          You must be able to enter a binding contract and not be barred from using the
          Service under any applicable law.
        </li>
        <li>
          You must not have been previously removed from the Service for a violation of
          these Terms.
        </li>
        <li>One person, one account. Accounts are personal and non-transferable.</li>
      </ul>

      <h2 id="account">3. Your account</h2>
      <p>
        You are responsible for what happens under your account, for keeping your
        credentials secret, and for the accuracy of what you put on your profile.
        Impersonating another person, or creating an account for someone else without
        their authority, is not allowed.
      </p>
      <p>
        Tell us promptly at{" "}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> if you believe
        someone else has accessed your account.
      </p>

      <h2 id="using">4. Using the Service</h2>
      <p>
        Subject to these Terms, we grant you a personal, limited, non-exclusive,
        non-transferable and revocable licence to install and use the app on a device you
        own or control, for your own non-commercial use.
      </p>
      <p>You may not:</p>
      <ul>
        <li>
          copy, modify, reverse engineer, decompile or create derivative works from the
          Service, except where that restriction is prohibited by law;
        </li>
        <li>
          scrape, crawl, or use bots or automated means to access the Service or collect
          information about other users;
        </li>
        <li>
          probe, interfere with or overload our systems, or bypass any security or rate
          limit;
        </li>
        <li>
          resell, sublicense or commercially exploit any part of the Service without our
          written permission.
        </li>
      </ul>

      <h2 id="conduct">5. Rules of conduct</h2>
      <p>
        {site.name} only works if people behave decently. You agree not to use the Service
        to:
      </p>
      <ul>
        <li>
          harass, threaten, stalk, intimidate or abuse anyone, or encourage others to do
          so;
        </li>
        <li>
          post or send content that is unlawful, hateful, violent, sexually explicit, or
          that sexualises minors in any way;
        </li>
        <li>
          share another person&rsquo;s private information - including their address,
          phone number or location - without their consent;
        </li>
        <li>
          solicit money, advertise, recruit, or run commercial promotions or spam;
        </li>
        <li>
          misrepresent who you are, your age, or your intentions for a plan;
        </li>
        <li>
          organise or promote any illegal activity, or a plan whose purpose is to cause
          harm;
        </li>
        <li>
          upload malware, or content you do not have the right to share.
        </li>
      </ul>
      <p>
        We may remove content and restrict accounts that break these rules, as described
        in section 14.
      </p>

      <h2 id="meeting">6. Meeting people in person</h2>
      <p>
        <strong>
          {site.name} helps you arrange to meet people. It does not vet them, and it is
          not responsible for what happens when you do.
        </strong>{" "}
        We do not conduct criminal background checks or identity verification on users.
      </p>
      <p>You are solely responsible for your own safety. We strongly recommend that you:</p>
      <ul>
        <li>meet in a public place, especially the first time;</li>
        <li>tell a friend where you are going and when you expect to be back;</li>
        <li>arrange your own transport and keep your phone charged;</li>
        <li>
          leave the moment something feels wrong, and report it in the app afterwards;
        </li>
        <li>
          never send money to someone you met through the Service, and treat any request
          for it as a scam.
        </li>
      </ul>
      <p>
        If you are in immediate danger, contact your local emergency services first, then
        report to us.
      </p>

      <h2 id="content">7. Your content</h2>
      <p>
        You keep ownership of everything you create on the Service - your profile, plans,
        messages, photos and moments (&ldquo;Your Content&rdquo;).
      </p>
      <p>
        You grant us a worldwide, non-exclusive, royalty-free licence to host, store,
        reproduce, adapt (for formatting and display) and distribute Your Content, solely
        to operate, secure and improve the Service. This licence ends when you delete the
        content or your account, except for copies retained for backup, safety or legal
        reasons, and except where another user has already received the content.
      </p>
      <p>
        You confirm that you have the rights to everything you post, and that it does not
        infringe anyone else&rsquo;s rights. We may remove content that breaches these
        Terms, but we are not obliged to monitor or store anything.
      </p>
      <p>
        If you believe content on the Service infringes your copyright, write to{" "}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> with enough detail
        to identify the work and the content in question.
      </p>

      <h2 id="plans">8. Plans, hosting and attendance</h2>
      <ul>
        <li>
          A plan is an arrangement between users. {site.name} is not a party to it, does
          not organise it, and does not guarantee that anyone will attend.
        </li>
        <li>
          If you host a plan, you are responsible for the accuracy of its details and for
          any venue, booking or cost involved.
        </li>
        <li>
          If you join a plan, turn up or cancel in good time. Repeatedly failing to show
          up may affect your access to the Service.
        </li>
        <li>
          Any cost, ticket, booking or payment associated with a plan is settled directly
          between the people involved. We are not responsible for it.
        </li>
      </ul>

      <h2 id="safety">9. Reporting, blocking and moderation</h2>
      <p>
        Every profile, plan and message carries a report and block control. Reports are
        reviewed and may lead to a warning, content removal, feature restriction or a
        permanent ban. We may preserve reported content for as long as needed to
        investigate, even where it would otherwise be deleted.
      </p>
      <p>
        Blocking someone removes them from your discovery and prevents them contacting
        you through the Service.
      </p>

      <h2 id="fees">10. Fees</h2>
      <p>
        The Service is currently free to use. If we introduce paid features, we will
        publish the price and terms before you are asked to pay, and any purchase will be
        processed by the applicable app store under its own terms. Nothing here obliges
        you to buy anything.
      </p>

      <h2 id="ip">11. Our intellectual property</h2>
      <p>
        The Service, including its software, design, text, graphics and the {site.name}{" "}
        name and logo, belongs to us or our licensors and is protected by intellectual
        property law. These Terms do not transfer any of those rights to you. Feedback you
        send us may be used without obligation or compensation.
      </p>

      <h2 id="third-party">12. Third-party services</h2>
      <p>
        The Service relies on third parties - app stores, cloud hosting, maps, push
        notification delivery - and may link to places we do not control. Their terms and
        privacy policies apply to their part of the experience, and we are not responsible
        for their content or availability.
      </p>

      <h2 id="availability">13. Availability and changes</h2>
      <p>
        We work to keep the Service running, but we do not promise it will be
        uninterrupted or error-free. We may add, change, suspend or discontinue features
        at any time. If we make a material change to these Terms, we will give reasonable
        notice in the app or by email; continuing to use the Service after that notice
        means you accept the updated Terms.
      </p>

      <h2 id="termination">14. Suspension and termination</h2>
      <p>
        You can stop using the Service and delete your account at any time from Settings.
      </p>
      <p>
        We may suspend or terminate your access, with notice where reasonably practicable,
        if you breach these Terms, if your conduct puts another person or the Service at
        risk, or if we are required to do so by law. Sections that by their nature should
        survive termination - including sections 7, 11, 15, 16, 17 and 18 - do.
      </p>

      <h2 id="disclaimer">15. Disclaimers</h2>
      <p>
        The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. To the
        fullest extent permitted by law, we disclaim all warranties, express or implied,
        including merchantability, fitness for a particular purpose and non-infringement.
      </p>
      <p>
        We make no warranty about the conduct, identity, intentions or safety of any user,
        about the accuracy of user-generated content, or about the outcome of any plan.
      </p>
      <p>
        Nothing in these Terms excludes liability that cannot be excluded under applicable
        law, including for death or personal injury caused by negligence, or for fraud.
      </p>

      <h2 id="liability">16. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {site.name} will not be liable for
        indirect, incidental, special, consequential or punitive damages, or for loss of
        profits, data, goodwill or opportunity, arising out of or related to your use of
        the Service.
      </p>
      <p>
        Our total aggregate liability for all claims relating to the Service is limited to
        the greater of the amount you paid us in the 12 months before the claim, or
        <strong> [INR 5,000]</strong>.
      </p>

      <h2 id="indemnity">17. Indemnity</h2>
      <p>
        You agree to indemnify and hold harmless {site.name}, its officers, employees and
        agents from any claim, damage, loss or expense (including reasonable legal fees)
        arising from your use of the Service, Your Content, your breach of these Terms, or
        your interaction with any other user.
      </p>

      <h2 id="law">18. Governing law and disputes</h2>
      <p>
        These Terms are governed by the laws of India, without regard to conflict of law
        rules. The courts of {site.jurisdiction} have exclusive jurisdiction, except where
        the law of your country of residence gives you the right to bring proceedings
        locally.
      </p>
      <p>
        Before starting formal proceedings, please contact us at{" "}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> - most problems can
        be settled quickly that way.
      </p>

      <h2 id="misc">19. General terms</h2>
      <ul>
        <li>
          <strong>Entire agreement.</strong> These Terms and the Privacy Policy are the
          whole agreement between you and us about the Service.
        </li>
        <li>
          <strong>Severability.</strong> If a provision is found unenforceable, the rest
          stays in force.
        </li>
        <li>
          <strong>No waiver.</strong> If we do not enforce a right, that is not a waiver
          of it.
        </li>
        <li>
          <strong>Assignment.</strong> You may not assign these Terms; we may assign them
          in connection with a merger, acquisition or sale of assets.
        </li>
        <li>
          <strong>Notices.</strong> We may contact you in the app or at the email address
          on your account.
        </li>
      </ul>

      <h2 id="contact">20. Contact</h2>
      <p>
        Questions about these Terms:{" "}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
        <br />
        Post: <strong>[Legal entity name], [registered address]</strong>
      </p>
    </LegalPage>
  );
}
