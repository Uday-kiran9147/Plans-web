import type { Metadata } from "next";
import { LegalPage, type Section } from "@/components/legal";
import { site } from "@/components/site";

export const metadata: Metadata = {
  title: "Child Safety Standards",
  description: `${site.name}'s standards against child sexual abuse and exploitation (CSAE), including how to report it and how we respond.`,
};

const sections: Section[] = [
  { id: "commitment", title: "1. Our commitment" },
  { id: "scope", title: "2. What this covers" },
  { id: "adults-only", title: "3. Plans is for adults only" },
  { id: "prohibited", title: "4. What is prohibited" },
  { id: "report", title: "5. How to report CSAE" },
  { id: "response", title: "6. How we respond" },
  { id: "prevention", title: "7. How we reduce the risk" },
  { id: "legal", title: "8. Legal compliance" },
  { id: "contact", title: "9. Child safety point of contact" },
  { id: "review", title: "10. Review of these standards" },
];

export default function ChildSafety() {
  return (
    <LegalPage
      kind="Child safety"
      title="Child Safety Standards"
      intro={`${site.name} has zero tolerance for child sexual abuse and exploitation. This page sets out what we prohibit, how to report it, and what we do when it is reported.`}
      sections={sections}
    >
      <h2 id="commitment">1. Our commitment</h2>
      <p>
        {site.name} has <strong>zero tolerance for child sexual abuse and exploitation
        (CSAE)</strong>. Content or behaviour that sexualises, exploits or endangers a
        child has no place on the Service, and we act on every report we receive.
      </p>
      <p>
        We prohibit CSAE in our <a href="/terms">Terms &amp; Conditions</a>, we provide a
        reporting control on every profile, plan and message in the app, we remove
        violating content and terminate the accounts responsible, and we report
        apparent child sexual abuse material (CSAM) to the appropriate authorities.
      </p>

      <h2 id="scope">2. What this covers</h2>
      <p>These standards apply to everyone who uses {site.name}, everywhere we operate.</p>
      <ul>
        <li>
          <strong>Child</strong> - any person under 18 years of age.
        </li>
        <li>
          <strong>CSAM</strong> - child sexual abuse material: any visual depiction of
          sexually explicit conduct involving a child.
        </li>
        <li>
          <strong>CSAE</strong> - child sexual abuse and exploitation: CSAM, and also
          conduct such as grooming, sextortion, trafficking of a child, the solicitation
          of a child for sexual purposes, and the promotion or facilitation of any of
          these.
        </li>
      </ul>

      <h2 id="adults-only">3. Plans is for adults only</h2>
      <p>
        {site.name} is an 18+ service. Our{" "}
        <a href="/terms">Terms &amp; Conditions</a> require every account holder to be at
        least 18 years old, and the Service is neither designed for nor directed to
        children.
      </p>
      <p>
        We do not knowingly permit anyone under 18 to hold an account. When we learn that
        an account belongs to a minor - through a report, a review, or information the
        user gives us - we terminate that account and delete its data in line with our{" "}
        <a href="/privacy">Privacy Policy</a>. You can tell us about an under-age account
        using the reporting routes in section 5.
      </p>

      <h2 id="prohibited">4. What is prohibited</h2>
      <p>The following are banned on {site.name}, without exception:</p>
      <ul>
        <li>
          creating, uploading, sending, requesting, linking to or otherwise sharing CSAM,
          in any form, real or generated;
        </li>
        <li>
          sexualising a child in text, images, plans, profiles or messages, including
          fictional or AI-generated depictions;
        </li>
        <li>
          grooming - building a relationship with a child for sexual purposes - or any
          attempt to arrange a meeting with a child for those purposes;
        </li>
        <li>
          sextortion: threatening to publish intimate imagery of a person in order to
          coerce them;
        </li>
        <li>child trafficking, or advertising a child for sexual purposes;</li>
        <li>
          using the Service to identify, contact or locate a child for any of the above;
        </li>
        <li>
          holding an account while under 18, or creating an account on behalf of a child.
        </li>
      </ul>
      <p>
        Breaching any of these results in immediate account termination and, where
        appropriate, a report to law enforcement.
      </p>

      <h2 id="report">5. How to report CSAE</h2>

      <h3>In the app</h3>
      <p>
        Every profile, plan and message in {site.name} carries a <strong>Report</strong>{" "}
        control, one tap from the content itself, alongside <strong>Block</strong>. Pick
        the reason that fits best - for CSAE, that is normally{" "}
        <em>Inappropriate content</em> or <em>Unsafe or threatening behaviour</em>. You do
        not need to be the person affected to report, and the person you report is never
        told who reported them.
      </p>
      <p>
        If your report involves a child, please also email the address below. It reaches
        us directly and is the fastest route to a human.
      </p>

      <h3>By email</h3>
      <p>
        You can report CSAE directly to{" "}
        <a href={`mailto:${site.childSafetyEmail}`}>{site.childSafetyEmail}</a>. Please
        include the username or plan involved and, if you can, when it happened. Do not
        attach suspected CSAM to your email - describe it instead, and we will retrieve
        what we need from our systems.
      </p>

      <h3>To the authorities</h3>
      <p>
        You can, and should, also report directly to the authorities. If a child is in
        immediate danger, contact your local emergency services first.
      </p>
      <ul>
        <li>
          India - the National Cyber Crime Reporting Portal at{" "}
          <a href="https://cybercrime.gov.in" rel="noopener noreferrer" target="_blank">
            cybercrime.gov.in
          </a>
          , or call 1930. Childline: 1098.
        </li>
        <li>
          United States - the NCMEC CyberTipline at{" "}
          <a
            href="https://report.cybertip.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            report.cybertip.org
          </a>
          , or 1-800-843-5678.
        </li>
        <li>
          Elsewhere - your national child protection hotline or police service. The
          INHOPE network lists reporting lines at{" "}
          <a href="https://inhope.org" rel="noopener noreferrer" target="_blank">
            inhope.org
          </a>
          .
        </li>
      </ul>

      <h2 id="response">6. How we respond</h2>
      <p>
        Child safety reports are prioritised above every other report type and are
        reviewed as quickly as we can, ahead of any other queue.
      </p>
      <ul>
        <li>
          <strong>Remove.</strong> Content we assess as CSAE is removed from the Service.
        </li>
        <li>
          <strong>Terminate.</strong> The account responsible is terminated, not
          suspended. We take reasonable steps to stop that person returning.
        </li>
        <li>
          <strong>Preserve.</strong> We preserve the account data and content relevant to
          the case for use by law enforcement, even where the content is removed from the
          Service and would otherwise have been deleted.
        </li>
        <li>
          <strong>Report.</strong> We report apparent CSAM and credible child
          endangerment to the appropriate authority for the jurisdiction, and we
          cooperate with lawful requests from them.
        </li>
        <li>
          <strong>Protect the reporter.</strong> We do not disclose the identity of the
          person who reported to the person reported.
        </li>
      </ul>
      <p>
        If we get it wrong, an account holder can appeal a termination by writing to{" "}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>. We do not
        reinstate accounts terminated for CSAE.
      </p>

      <h2 id="prevention">7. How we reduce the risk</h2>
      <ul>
        <li>
          <strong>Adults only.</strong> The Service is 18+ and is not directed to
          children. We do not market it to minors.
        </li>
        <li>
          <strong>Reporting is never more than a tap away.</strong> Report and block
          controls sit on the profile, plan and message itself rather than buried in
          settings.
        </li>
        <li>
          <strong>Blocking is immediate.</strong> A blocked user cannot see you in
          discovery or contact you through the Service.
        </li>
        <li>
          <strong>Plan rooms are temporary.</strong> Group chats exist for the duration of
          a plan and then close, which limits the ongoing contact a bad actor can build.
        </li>
        <li>
          <strong>No open broadcast.</strong> There is no public feed to push content to
          strangers at scale; content is scoped to a plan and the people in it.
        </li>
        <li>
          <strong>We act on patterns, not just single reports.</strong> Repeated reports
          against an account are reviewed together.
        </li>
      </ul>

      <h2 id="legal">8. Legal compliance</h2>
      <p>
        We comply with the child safety laws that apply to us and to our users, including,
        as applicable:
      </p>
      <ul>
        <li>
          the Protection of Children from Sexual Offences Act, 2012 (POCSO) and the
          Information Technology Act, 2000, together with the Information Technology
          (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, in India;
        </li>
        <li>
          the reporting obligations that apply to electronic service providers in other
          jurisdictions where we operate, including reporting apparent CSAM to the
          National Center for Missing &amp; Exploited Children (NCMEC) where United States
          law requires it;
        </li>
        <li>
          the child safety requirements of the app stores that distribute {site.name},
          including Google Play&rsquo;s Child Safety Standards policy.
        </li>
      </ul>
      <p>
        Nothing in these standards limits our obligation to comply with a lawful order
        from a competent authority.
      </p>

      <h2 id="contact">9. Child safety point of contact</h2>
      <p>
        For child safety reports, questions about these standards, and enquiries from law
        enforcement or regulators:
      </p>
      <p>
        <strong>
          <a href={`mailto:${site.childSafetyEmail}`}>{site.childSafetyEmail}</a>
        </strong>
        <br />
        {site.company}, {site.jurisdiction}
      </p>
      <p>
        Law enforcement requests should identify the requesting agency and the legal basis
        for the request.
      </p>

      <h2 id="review">10. Review of these standards</h2>
      <p>
        We review these standards at least once a year, and whenever the Service changes
        in a way that affects child safety. The effective date and last updated date at
        the top of this page always reflect the current version.
      </p>
    </LegalPage>
  );
}
