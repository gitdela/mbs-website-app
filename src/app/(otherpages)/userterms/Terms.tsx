import Container from '@/components/Container';
import { Heading } from '@/components/ui/header';
import Link from 'next/link';

const Terms = () => {
  return (
    <Container>
      <div className='py-8 pt-24 text-white text-sm'>
        <div className='w-full'>
          <div className='hidden md:block'>
            <Heading
              title={'Terms Of Service'}
              src='/assets/terms-con.png'
              alt='terms'
              imageWidth={100}
              imageHeight={100}
            />
          </div>
          <div className='block md:hidden'>
            <Heading
              title={'Terms Of Service'}
              src='/assets/terms-con.png'
              alt='terms'
              imageWidth={50}
              imageHeight={50}
            />
          </div>

          <p className='my-2'>
            This agreement is very needful for all users of this website as it
            contains rights, obligations, conditions, and restrictions that may
            apply to our users. Kindly read through it thoroughly
          </p>
          <p className='my-3'>
            This agreement forms the legal document that covers all the
            activities that a user undertakes on Mybitstore.com or any
            affiliated Mybitstore platform and it includes hosting of digital
            wallet, buying and selling of cryptos, holding and the release of
            cryptos by users as instructed when a transaction is completed.
            Kindly note that all users are governed by this agreement and the
            privacy policy.
          </p>
          <p className='my-2 '>
            The agreement or the terms of mybitstore.com exclusively requires
            the use of our dispute system rather than any other method unless{' '}
            {`it's`} deemed unlawful by the laws of Ghana.
          </p>
          <p className='my-3'>
            Before signing up to Mybitstore or any of our affiliated platforms,
            kindly ensure that you have read all the terms and conditions in
            addition to the{' '}
            <a href='/privacy' target='_blank'>
              privacy notice
            </a>{' '}
            and have agreed to be bound by these legal documents and have given
            your consent upon signup.
          </p>
          <p className='my-2 '>
            Again, kindly note that cryptocurrencies are highly volatile and so
            buying, selling, holding, or investing in cryptocurrencies are very
            risky. Always take your financial position into consideration before
            undertaking any cryptocurrencies activity
          </p>

          <div className='terms_condition-text'>
            <h1 className='font-medium text-2xl text-white'>
              About Mybitstore and its Services{' '}
            </h1>
            <ul className='list-disc my-2 pl-8'>
              <li>
                <p className='my-3'>
                  Our passionate team wants to introduce you to this
                  cutting-edge cryptocurrency and peer-to-peer escrow platform
                  that we have spent and dedicated time and effort to create. It
                  offers a convenient and easy means of peer-to-peer
                  cryptocurrency trading.
                </p>
              </li>
              <li>
                <p className='my-3'>
                  Mybitstore also offers hosted digital wallet services through
                  kollet.io, a digital asset wallet provider. Our user can post
                  offers to either buy or sell cryptos. The buyers and sellers
                  are responsible for their offer terms in trade chat.
                  Transactions on Mybitstore are conducted between the Buyers
                  and Sellers. Accordingly, Mybitstore is not a party to any
                  transaction.
                </p>
              </li>
              <li>
                <p className='my-3'>
                  Mybitstore hosts digital currency wallet services. Mybitstore
                  does not store or custody any bitcoin or any digital currency.
                  Bitcoin, like other digital currencies, is always stored on
                  its respective networks or block chains. All digital currency
                  transactions occur within the digital currency network, not on
                  Mybitstore. There are no guarantees that the transaction will
                  process on the digital currency network. Mybitstore reserves
                  the right to refuse to process any transaction if required by
                  law or if we deem the transactions to be against our terms and
                  conditions in this Agreement. You hereby accept and
                  acknowledge that you take full responsibility for all
                  activities that occur under your wallet and accept all risks
                  of any authorized or unauthorized access to your wallet, to
                  the maximum extent permitted by law.
                </p>
              </li>
            </ul>
          </div>
          <h1 className='font-medium text-2xl text-white'>GENERAL </h1>
          <ul className='list-disc my-2 pl-8'>
            <li>
              <p className='my-3'>
                We reserve the right to change any portion of these terms
                without prior notice. But in situations where you have your
                e-mail in our database, we shall notify you or post it on our
                website. It is your obligation to constantly read through our
                terms for modifications. You have the right to delete your
                account upon request if you {`don't`} like any part of the
                terms.
              </p>
            </li>
            <li>
              <p className='my-3'>
                Failure or delay on the part of Mybitstore to enforce or
                partially enforce any of the provisions shall not be considered
                as a waiver of any of our rights or remedies.
              </p>
            </li>
          </ul>
          <h1 className='font-medium text-2xl text-white'>
            ACCOUNT &amp; REGISTRATION{' '}
          </h1>
          <ul className='list-disc my-2 pl-8'>
            <li>
              <p className='my-3'>
                In order to use the Services, users will need to register an
                account through our Website. During the registration process, we
                will ask you for certain information, such as your name and
                address, amongst other personal information, in order to verify
                your identity. We may, in our discretion, refuse to maintain an
                account for you. By registering an account, you hereby accept
                and acknowledge that you: (a) are of legal age in your
                respective jurisdiction to agree to this Agreement; and (b) have
                not previously been suspended or removed from using our
                Services.
              </p>
            </li>
            <li>
              <p className='my-3'>
                By using your account, you acknowledge that you are using the
                account for yourself, and not on behalf of a third party. Unless
                expressly authorized by Mybitstore, you are only allowed to
                maintain one account and are not allowed to sell, borrow, share
                or otherwise make available your account or any detail necessary
                to access your account to third parties. You are solely
                responsible and liable for maintaining adequate security and
                control of your account, including ensuring the safety of any
                and all usernames, email addresses, passwords, two-factor
                authentication codes or any other codes or credentials that you
                use to access Mybitstore services. Providing false information
                for your account, including providing a false country of origin,
                providing false identification documents, and so on, are
                strictly prohibited, and may result in the termination of your
                use of Mybitstore services.
              </p>
            </li>
            <li>
              <p className='my-3'>
                As part of your registration on Mybitstore, you agree to provide
                us with information that will be used for the purposes of
                identity verification, and the detection of financial criminal
                activities like money laundering, terrorist financing, fraud,
                and so on. As a Mybitstore service user, you will need to
                complete certain verification procedures. These procedures may
                be subject to modification as a result of the information
                Mybitstore may collect about you on an ongoing basis.
                Information about you, including your name, address, contact
                information, date of birth, taxpayer identification number
                (TIN), social security number, and government identification
                numbers, amongst others, may be collected by Mybitstore. Your
                provision of these information will serve as confirmation that
                the information provided is accurate, true, and not misleading.
                You also agree that upon any information change, that Mybitstore
                will be notified with the new information.
                <p className=''>
                  You,
                  <span className='lowercase'>
                    hereby, authorize mybitstore to make inquiries, directly or
                    indirectly through third parties, that we consider necessary
                    to verify your identity information or protect both you and
                    us against fraud or other financial crimes, to take the
                    necessary actions based on the results of the inquiries.
                    when mybitstore makes these inquiries, you acknowledge that
                    your personal information will be shared with third parties,
                    including credit reference, fraud prevention and financial
                    crime agencies and that the inquiries will be responded to
                    in full.
                  </span>
                </p>
              </p>
            </li>
            <li>
              <p className='my-3'>
                If you, as a client of Mybitstore, are using the Services on
                behalf of a legal entity, you further represent and warrant
                that: (i) the legal entity is duly organized and validly
                existing under the applicable laws of the jurisdiction of its
                organization; and (ii) you are formally authorized by said legal
                entity to act on its behalf. A verified corporate account is
                unique to a specific legal identity, and can only be used by the
                entity that created it. Corporate account information is not
                allowed to be shared with other individuals or parties. Verified
                corporate accounts are allowed the following exemptions:
              </p>
              <br />
            </li>
            <p className='my-3'>
              i. Corporate accounts may have multiple active users provided that
              the users are all company-verified employees, and have been
              disclosed to and approved by Mybitstore in its sole and absolute
              discretion; and
            </p>
            <p className='my-3'>
              ii. Corporate accounts, regardless of the number of active users,
              may only have one active offer for a specific transaction at any
              one time
            </p>
            <li>
              <p className='my-3'>
                The user is responsible for creating and maintaining adequate
                security and control of any IDs, passwords, hints, Personal
                Identification Numbers (PINs), API keys, and other codes that
                can be used to access the services of Mybitstore. The loss of
                any of the security information may result in unauthorized
                access to the {`user's`} account by a third party, and the loss
                or theft of any bitcoins and/or funds associated with your
                account, including your linked payment accounts. The user is
                also solely responsible for keeping their contact information up
                to date in order to be able to receive up-to-date information on
                Mybitstore. The user should never allow access to their computer
                screen when logged into their account. If users allow access to
                their account, Mybitstore will not be responsible for any loss
                sustained due to the compromise of the {`user's`} account login
                information which may occur by no fault of Mybitstore and/or the{' '}
                {`user's`} failure to follow or act on Mybitstore notices or
                alerts that may be sent to them.
              </p>
            </li>
            <li>
              <p className='my-3'>
                Certain legal obligations have to be fulfilled in the {`user's`}
                country and/or state of residence before getting access to
                Mybitstore services. By agreeing to the terms laid out in this
                Agreement, the user confirms that local laws and regulations
                have been reviewed, and that all requirements and obligations
                have been fulfilled. Certain legal and/or regulatory obligation
                prohibits Mybitstore from offering its services in certain
                jurisdictions. Accepting the terms of this Agreement confirms
                the {`user's`} non-residence in such jurisdictions, or are not
                governed by the laws and regulations of those jurisdictions.
              </p>
            </li>
            <li>
              <p className='my-3'>
                Mybitstore services may not be available in all markets and
                jurisdictions, and Mybitstore may put restrictions on all or
                portions of its services in certain jurisdictions (“Restricted
                Jurisdictions”). Restricted Jurisdictions are identified in
                Mybitstore “List of Banned Countries”, and may be updated when
                necessary. Users are not supposed to use Mybitstore services
                when located in any of the Restricted Jurisdictions, and users
                must not attempt to circumvent any outlined restrictions when
                the listed Restricted Jurisdiction through devious means like
                hiding or changing your IP address or submitting inaccurate
                information about your location.
              </p>
            </li>
          </ul>
          <div className='terms_condition-text'>
            <h1 className='font-medium text-2xl text-white'>
              JURISDICTION, ARBITRATION &amp; SEVERABILITY
            </h1>
            <ul className='list-disc my-2 pl-8'>
              <li>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p className='my-3'>
                  Without regard to the principles of conflict of laws, this
                  terms of service and the {`users'`} use of the Mybitstore
                  website shall be governed by and construed in accordance with
                  the Republic of Ghana
                </p>
              </li>
              <li>
                <p className='my-3'>
                  Arbitration. The User and Mybitstore agree that arbitration on
                  an individual basis shall be the final conflict resolution
                  mechanism, in accordance with the Alternative Dispute
                  Resolution Act (2010) Act 798, for any disputes arising out of
                  or relating to the provisions of this Agreement or the
                  Services of Mybitstore. Based on the requirements of specific
                  jurisdictions, consumer claimants (individuals whose
                  transaction is intended for personal, family, or household
                  use) may choose to pursue their claims in local small claims
                  courts rather than through arbitration provided the matter
                  remains in small claims court and proceeds only on an
                  individual basis (non-class or non-representative).
                </p>
              </li>
              <li>
                <p className='my-3 '>
                  All{' '}
                  <span className='lowercase'>
                    claims against mybitstore will only be brought against us on
                    an individual basis. claims will not be brought against
                    mybitstore as a plaintiff, a member of any purported class,
                    collective action or any representative proceedings
                    (collectively “class action”). more than one person’s claims
                    or any class arbitration may not be consolidated by the
                    arbitrator. by agreeing to these terms of service, you waive
                    any right to a trial by jury or participating in a class
                    action against Mybitstore.
                  </span>
                </p>
              </li>
              <li>
                <p className='my-3'>
                  Arbitrations will be done by a single, neutral person within
                  Accra by all parties. The Arbitrator has the power to award
                  any compensation or relief that a court of competent
                  jurisdiction could award, including attorney’s fees when
                  authorized by law, and the arbitral judgement will be
                  enforceable in a court of law. At the request of the user,
                  arbitrations may be conducted in person, or via the
                  telephone,Zoom ,Microsoft Teams or any other like Application
                  as is permissible . The prevailing party in any action or
                  proceeding to enforce this Agreement shall be entitled to
                  costs and attorneys’ fees.
                </p>
              </li>
              <li>
                <p className='my-3'>
                  Either party shall be responsible for the payment of all fees
                  associated with the arbitration proceedings.If certain
                  provisions of this agreement are held by an arbitrator or a
                  Court of Ghana to be invalid or unenforceable, the
                  enforceability of other provisions of the terms and conditions
                  shall not be affected. All headings in the agreement are only
                  meant to be informational, not enforceable.
                </p>
              </li>
              {/* <li>
                  <p className="my-3">
                    If certain provisions of this agreement are held by an
                    arbitrator or a Court of Ghana to be invalid or
                    unenforceable, the enforceability of other provisions of the
                    terms and conditions shall not be affected. All headings in
                    the agreement are only meant to be informational, not
                    enforceable.{" "}
                  </p>
                </li> */}
            </ul>
          </div>
          <div className='terms_condition-text'>
            <h1 className='font-medium text-2xl text-white'>
              PRIVACY POLICY &amp; SECURITY :{' '}
            </h1>
            <ul className='list-disc my-2 pl-8'>
              <li>
                <p className='my-3'>
                  Mybitstore will take all the necessary steps to ensure that
                  users’ personal information is protected. However, Mybitstore
                  cannot guarantee that information that users disclose online
                  will be protected. The users accept the inherent security
                  risks of making their personal information available online
                  and dealing online, and will not hold Mybitstore responsible
                  for any breach of security unless it is as a result of
                  Mybitstore’s negligence.
                </p>
              </li>
            </ul>
            <p className='my-3'>
              Please view our official privacy statement{' '}
              <Link href='/privacy'>Mybitstore Official Website</Link>.
            </p>
          </div>
          <div className='terms_condition-text'>
            <h1 className='font-medium text-2xl text-white '>
              NO WARRANTY, LIMITATION OF LIABILITY &amp; ASSUMPTION OF RISK{' '}
            </h1>
            <p className='text-justify text-lg uppercase'>
              WHETHER EXPRESS, IMPLIED OR STATUTORY, Mybitstore’s SERVICES ARE
              AVAILABLE ONLY ON AN “AS IS” AND “AS AVAILABLE” BASIS, DEVOID OF
              ANY GUARANTEES, REPRESENTATIONS OR WARRANTIES. TO THE EXTENT THAT
              THE LAW ALLOWS, ANY IMPLIED WARRANTIES OF TITLE, MERCHANTIBILITY,
              AND FITNESS FOR A PARTICULAR PURPOSES AND/OR NON-INFRINGEMENT ARE
              SPECIFICALLY DISCLAIMED BY Mybitstore. Mybitstore DOES NOT
              GUARANTEE, MAKE ANY REPRESENTATIONS OF OR ANY WARRANTIES THAT THE
              USER’S ACCESS TO ITS WEBSITE, ANY PART OF ITS SERVICES, OR ANY
              MATERIALS MADE AVAILABLE BY Mybitstore, WILL BE CONTINUOUS,
              UNINTERRUPTED, TIMELY, OR ERROR-FREE. WE ARE NOT LIABLE FOR
              DISRUPTION OF SERVICES THAT USERS EXPERIENCE OR LOSS THAT USERS
              INCUR. BY AGREEING TO THESE TERMS OF SERVICE, THE USER
              ACKNOWLEDGES THAT THEIR ACCESS AND USE OF Mybitstore’s SERVICES
              ARE NOT BASED ON ANY OTHER STATEMENT OR UNDERSTANDING, WRITTEN OR
              ORAL. THE USER, BY AGREEING TO THESE TERMS OF SERVICE,
              ACKNOWLEDGES AND ACCEPTS THE RISKS ASSOCIATED WITH USING DIGITAL
              CURRENCY, INCLUDING HARDWARE FAILURE, SOFTWARE ISSUES, INTERNET
              CONNECTION FAILURE, MALICIOUS SOFTWARE, THIRD PARTY INTERFERENCE
              LEADING TO LOSS OR LACK OF ACCESS TO YOUR ACCOUNT OR WALLET AND
              OTHER USER DATA, AMONG OTHERS. BY AGREEING TO THIS TERMS OF
              SERVICE, Mybitstore USERS ACKNOWLEDGE AND ACCEPTS Mybitstore’s
              LACK OF RESPONSIBILITY FOR ANY FAILURES IN COMMUNICATION,
              DISRUPTIONS IN COMMUNICATION, ERRORS IN COMMUNICATION, DISTORTIONS
              IN COMMUNICATION, OR DELAYS IN COMMUNICATION THAT THEY MAY
              EXPERIENCE IN THEIR USE OF MYBITSTORE’S SERVICE, REGARDLESS OF THE
              CAUSE
            </p>
            <p className='text-justify text-lg capitalize'>
              UNDER NO CIRCUMSTANCES SHALL Mybitstore, ITS AFFILIATES AND
              SERVICE PROVIDERS, OR ANY OF THEIR RESPECTIVE OFFICERS, DIRECTORS,
              AGENTS, EMPLOYEES, ADVISORS, CONSULTANTS OR REPRESENTATIVES, BE
              LIABLE (A) FOR THE PAYMENT OF LOSSES OF ANY AMOUNT HIGHER THAN THE
              VALUE OF THE TOTAL FEES PAID BY THE USER FOR THE SERVICE THAT IS
              AT THE CENTER OF THE ACTION IN THE TWELVE (12) MONTHS PRIOR TO THE
              LOSS ARISING OR (B) FOR ANY LOSSES, REDUCTION IN VALUE OR BUSINESS
              OPPORTUNITY, ANY LOSS, DAMAGE, CORRUPTION OR BREACH OF DATA OR ANY
              OTHER INTANGIBLE PROPERTY OR ANY SPECIAL, INCIDENTAL, INDIRECT,
              INTANGIBLE, OR CONSEQUENTIAL DAMAGES, WHETHER BASED IN CONTRACT,
              TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE, ARISING OUT OF
              OR IN CONNECTION WITH AUTHORIZED OR UNAUTHORIZED USE OF THE SITE
              OR THE SERVICES, OR THIS AGREEMENT, EVEN IF AN AUTHORIZED
              REPRESENTATIVE OF Mybitstore HAS BEEN ADVISED OF OR KNEW OR SHOULD
              HAVE KNOWN OF THE POSSIBILITY OF SUCH DAMAGES, AND NOTWITHSTANDING
              THE FAILURE OF ANY AGREED OR OTHER REMEDY OF ITS ESSENTIAL
              PURPOSE,  EXCEPT TO THE EXTENT OF A FINAL JUDICIAL DETERMINATION
              THAT SUCH DAMAGES WERE A RESULT OF Mybitstore’S GROSS NEGLIGENCE,
              FRAUD, WILLFUL MISCONDUCT OR INTENTIONAL VIOLATION OF LAW. SOME
              JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF
              INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION MAY
              NOT APPLY TO YOU.
            </p>
            <p className='text-justify text-lg '>
              Mybitstore does not own or control the basic software protocols
              which control the bitcoin and other digital currency operation.
              The underlying protocols are generally open source, meaning open
              to the usage, copy, modification and distribution by anyone.
              Mybitstore, therefore, accepts no responsibility for the workings
              of the underlying protocols and cannot guarantee the functioning
              and security of network operations. In some cases, especially, the
              underlying programming of the bitcoin and other digital currencies
              may be experience changes in its operating rules (including
              forks). Such changes may affect the availability, value,
              functionality, and/or name of the digital currency. Mybitstore has
              no control over when and what features are changed. It is the
              {` users'`} responsibility to keep updated on changes happening in
              the digital currencies, and to scrutinize publicly available
              information that may have provided by Mybitstore to determine
              whether to continue using its services. Mybitstore reserves the
              right to take all necessary steps to protect the security and
              safety of its operations and its platform in the event that
              digital currencies make some fundamental changes to its
              operations. Mybitstore can suspend its operations for the involved
              digital currencies to protect itself. Mybitstore will endeavor to
              notify its users of its response to any operational changes in the
              digital currency community; however, Mybitstore may not be
              notified when such changes occur. Mybitstore’s response to the
              material change in any digital currency’s operations is in
              Mybitstore’s sole discretion, and includes opting not to give any
              support to any new fork or other actions. By agreeing to these
              terms of service, you as a user acknowledge and accept the
              potential risk of changes to the operations of bitcoin and other
              digital currencies and also agree that Mybitstore is not
              responsible for said changes, and, therefore, not liable for any
              loss in value that you may experience as a result of the changes,
              You also accept that it is in Mybitstore’s discretion to decide
              how to respond to such operating changes and that Mybitstore has
              no responsibility to give any assistance to you the user with any
              unsupported currencies or protocols
            </p>
            <p className='text-justify text-lg '>
              Users may be exposed to third party content and services while
              patronizing Mybitstore’s services, including hyperlinks to third
              party websites and their services (“3rd Party Content”).
              Mybitstore would like users to understand that, we do not endorse,
              adopt or control any 3rd&nbsp;party content and will have no
              responsibility or liability for such 3rd&nbsp;party content
              whatsoever. Also, Mybitstore is not responsible or liable for any
              damage or loss of any sort that users may incur as a result of
              their patronization of third-party content, as the user’s dealings
              or correspondence with such third parties are solely between you
              and the third parties at your own risk.
            </p>
            <p className='text-justify text-lg '>
              For clarity, Mybitstore does not provide investment, tax, or legal
              advice. Mybitstore is not registered with the Ghana Securities and
              Exchange Commission and does not offer securities services or
              investment advice. All transactions through our Marketplace are
              conducted on a peer-to-peer basis between the Seller and Buyer
              and, therefore, Mybitstore bears no responsibility for
              guaranteeing the success of investment strategies, or even which
              investment strategies to adopt. It is the responsibility of the
              user to make such determinations based on their personal
              investment objectives, risk tolerance and financial circumstances.
              Mybitstore recommends that users consult their legal and tax
              professionals regarding making such determinations. Mybitstore
              will, however, periodically provide educational materials about
              our platform and products in order to aid users in the
              patronization of our services. Said materials may include, but is
              not limited to, blog posts, articles, and links to 3rd party
              content, news feeds, tutorials, and videos. The information
              provided on the Website or any third-party sites does not
              constitute investment advice, financial advice, trading advice, or
              any other sort of advice, and users should not treat any of the
              Website’s content as such. Users will conduct their own due
              diligence and consult professionals before making the decision to
              buy, sell or hold bitcoin and make investment decisions.
              Mybitstore will not be held responsible for the decisions you make
              to buy, sell, or hold bitcoin or any digital currency based on the
              information provided by Mybitstore
            </p>
            <p className='text-justify text-lg '>
              You agree that Mybitstore are not liable for any price
              fluctuations in bitcoin. In cases where there is market disruption
              or a Force Majeure event (as described in Section 17), Mybitstore
              will take one or more of the following steps; (a) suspend access
              to the Services; or (b) prevent you from completing any actions
              via the Services. Mybitstore will not be liable for any losses
              suffered by you resulting from such actions. Following any such
              event, when Services resume, you acknowledge that prevailing
              market rates may differ significantly from the rates available
              prior to such event.
            </p>
            <p className='text-justify text-lg '>
              Mybitstore makes no warranty that its website or its servers are
              free of viruses, errors or other malicious content, or that its
              content is accurate, its services will be uninterrupted, or that
              any detected defects on its websites or servers will be corrected.
              Mybitstore will not be liable for any losses, on the part of the
              user, from actions taken or decisions made in reliance on the
              material or information contained on our Website.
            </p>
          </div>
          <div className='terms_condition-text'>
            <h1 className='font-medium text-2xl text-white'>
              RELEASE OF Mybitstore &amp; INDEMNITY :{' '}
            </h1>
            <p className='my-3'>
              If users disagree or are in dispute over the services of
              Mybitstore, you release Mybitstore, its affiliates and service
              providers, and each of its or their respective officers,
              directors, employees, agents and representatives, from claims,
              demands, actual and consequential damages that arises as a result
              of any disputes. You also agree that Mybitstore and its
              affiliates, and each of its or their respective officers,
              directors, employees, agents and representatives, are not liable
              for any claim or demand (including attorneys’ fees and any fines,
              fees or penalties imposed by any regulatory authority) that arise
              as a result of or related to any breach of this terms of service
              by you the user, or for your violation of any law, rules or
              regulations, or your violation of the rights of a third party.
            </p>
          </div>
          <div className='terms_condition-text'>
            <h1 className='font-medium text-2xl text-white'>
              TRANSACTIONS ON MYBITSTORE MARKETPLACE{' '}
            </h1>
            <p className='my-3'>
              The Website allows users to solicit offers to buy or sell Bitcoin.
            </p>
            <p className='my-3'>
              When a user begins a transaction for the buying or selling of
              bitcoin, the transactions occurs within the provisions outlined in
              this Agreement and additional terms, if any, that the user details
              for their counterparty. A detailed guide on buying and selling
              bitcoin and other digital currencies on the Mybitstore Marketplace
              can be found at Mybitstore Buy and Sell Page
            </p>
            <p className='my-3'>
              The following general terms apply to each transaction described
              below
            </p>
            <p className='my-3'>
              <em>
                <b>
                  Buying bitcoin via soliciting an offer: When purchasing
                  bitcoin on the Mybitstore Marketplace,
                </b>
              </em>
            </p>
            <ul className='list-decimal my-2 pl-8'>
              <li>
                <p className='my-3'>
                  There are no fees for Mybitstore Escrow as part of a
                  transaction that are payable by Buyers on our Marketplace
                </p>
              </li>
              <li>
                <p className='my-3'>
                  Offers from Mybitstore counterparties have their own terms and
                  conditions; vary in exchange rate, speed of exchange, and the
                  Seller’s terms and conditions. By accepting a Seller’s offer,
                  you agree to be bound by the Seller’s terms and conditions of
                  that offer. In all cases except when they contradict or
                  violate this Agreement, are illegal, are unreasonable or
                  otherwise difficult to comply with (as determined in
                  Mybitstore’s sole and absolute discretion), or if both users
                  of the transaction consent to alter the terms and conditions
                  of such offer, the Seller’s terms and conditions are valid
                </p>
              </li>
              {/* <li> */}
              <p className='my-3 '>
                It is the responsibility of the buyer to carefully read the
                terms of the seller and follow them verbatim. If the seller’s
                terms and conditions are not followed, the buyer’s payment will
                not be accepted. Buyers are advised to never submit payment
                unless all terms and conditions listed by the seller in the
                offer has been followed. If payment is made without the meeting
                the demands of the seller, mybitstore cannot assist the buyer in
                the dispute process to recover the payment
              </p>
              {/* </li> */}
              <li>
                <p className='my-3'>
                  It is the sole responsibility of the user to verify payments
                  and provide instructions on how to unlock bitcoin from
                  Mybitstore Escrow, not Mybitstore. Users have the
                  responsibility to report uncooperative users to Mybitstore
                  using the dispute button in the particular transaction chat if
                  the Seller does not release the bitcoins to you upon proper
                  completion of the Seller’s terms and conditions. Mybitstore
                  support will review and settle the dispute. This dispute
                  resolution process is further described below in Section 8 -
                  Disputing Transactions Via Mybitstore’s Dispute Resolution
                  Process.” If you do not follow this dispute resolution
                  process, Mybitstore will be unable to assist you with this
                  matter.
                </p>
              </li>
            </ul>
            <p className='my-3'>
              <em>
                <b>
                  Selling Bitcoin:When selling bitcoin on the Mybitstore
                  Marketplace,
                </b>
              </em>
            </p>
            <ul className='list-decimal my-2 pl-8'>
              <li>
                <p className='my-3'>
                  Sellers must verify and process payment within the specified
                  amount of time provided in the offer terms, and within a
                  reasonable amount of time. Once the Buyer makes payment in
                  accordance with the offer terms, it is the responsibility of
                  the Seller to verify and process the payment and the unlock
                  the bitcoin from Mybitstore Escrow to be released to the
                  Buyer. Sellers who do not follow the instructions of the offer
                  may not be entitled to a return of their locked bitcoin.
                </p>
              </li>
              <li>
                <p className='my-3'>
                  Sellers accept any and all risks and liabilities for any
                  violation of the terms and conditions provided under this
                  Agreement associated with the sale of bitcoin. It is also the
                  responsibility of the Seller to pay the taxes on their sales.
                  Mybitstore charges a fee to them as the Seller of bitcoin for
                  locking bitcoin in Mybitstore Escrow subject to a sale.
                  Mybitstore shall not reimburse any losses to the Seller
                  whether due to a violation of this Agreement, fraud or
                  otherwise and our fee will not be refunded under any
                  circumstances
                </p>
              </li>
              <li>
                <p className='my-3'>
                  Sellers must ensure that any and all payments are processed
                  and confirmed to have been received before unlocking any
                  bitcoin, as Mybitstore will not be liable or responsible for
                  Sellers’ losses if bitcoin is unlocked before payment
                  processing and verification is conducted. Sellers must be
                  attentive and responsive to Buyers. You should deactivate any
                  inactive offers.
                </p>
              </li>
              <li>
                <p className='my-3'>
                  Mybitstore strictly does not allow Sellers to advertise their
                  own websites in any section of Mybitstore Marketplace to
                  facilitate buying and selling of bitcoins outside of
                  Mybitstore services. Mybitstore will allow, in limited
                  instances, sellers to share their website for the sole purpose
                  of receiving payment in order to complete transactions in the
                  transaction instructions provided that the use of such
                  external websites are made clear in the offer terms and such
                  websites may not contain any other advertisements or your
                  contact information.
                </p>
              </li>
            </ul>
            <p className='my-3'>
              <em>
                <b>Compliance</b>
              </em>
            </p>
            <ul className='list-disc my-2 pl-8'>
              <li>
                <p className='my-3'>
                  No third party is affiliated with or has endorsed, is
                  associated with, or affiliated with Mybitstore, including but
                  not limited to gift card issuers. Designated trademarks,
                  brands, and other identifiers are the sole property of the
                  owners of Mybitstore. The owners have no endorsement,
                  sponsorship, association or affiliation with Mybitstore and
                  its Services. Mybitstore and its Services are separate
                  entities
                </p>
              </li>
              <li>
                <p className='my-3'>
                  Mybitstore is not licensed to deal in or issue gift cards. Any
                  gift cards you receive from a Mybitstore user is subject to
                  the terms and conditions of a third-party merchant who can
                  redeem the gift card. To that end, Mybitstore is not
                  responsible for any acts or omissions any issuer (s), or any
                  fees, expiration dates, penalties or terms and conditions
                  associated with the {`Issuer's`} gift card received using the
                  Mybitstore Marketplace. Users acknowledge that receiving gift
                  cards from another user is an indication that you have read
                  the terms and conditions of the gift card issuer, and
                  indicates to Mybitstore that you the user are eligible to use
                  the gift cards under said terms and conditions, or under
                  applicable law.
                </p>
              </li>
              <li>
                <p className='my-3 '>
                  On the mybitstore website and marketplace, brokering or
                  reselling of gift cards is strictly prohibited. A user must be
                  the rightful owner of the gift card, and be able to prove
                  ownership at {`mybitstore's`} request. Third party payment
                  methods on {`mybitstore's`} website may not permit
                  transactions via {`mybitstore's`} services, and any
                  third-party payment methods on our website may not be
                  supported. Mybitstore is under makes no claim, representation
                  or guarantees for the operations of third-party payment
                  methods on its website and marketplace. If third parties do
                  not permit their payment methods on mybitstore, users are
                  advised to not use it on {`mybitstore's`} website and
                  marketplace.
                </p>
              </li>
              <li>
                <p className='my-3 '>
                  It is the {`users'`} responsibility to comply with all the
                  laws and regulations to be complied with within their
                  jurisdictions in which mybitstore transactions take place.
                </p>
              </li>
              <li>
                <p className='my-3'>
                  All Mybitstore transactions should take place within the
                  Mybitstore website or the Mybitstore marketplace. Transactions
                  outside Mybitstore platforms and exchanging contact
                  information are strictly prohibited.
                </p>
              </li>
              <li>
                <p className='my-3'>
                  Transfer Limitations. Mybitstore may, within our rights and
                  sole discretion, impose caps on the size, type, or manner of
                  any proposed transfers transaction.
                </p>
              </li>
              <li>
                <p className='my-3'>
                  No Guarantee. Mybitstore cannot and does not guarantee that
                  users will be able to buy or sell bitcoin and other digital
                  currencies on its Marketplace. Also, the act of buying and
                  selling bitcoin and other digital currencies on the Mybitstore
                  marketplace now does not guarantee that such business can be
                  conducted on Mybitstore marketplace at a later time.
                </p>
              </li>
              <li>
                <p className='my-3'>
                  Relationship. This agreement is not an agreement for any
                  partnership, joint venture, agency, consultancy, or
                  trusteeship between you the user and Mybitstore. You and
                  Mybitstore are, with respect to each other, independent
                  contractors.
                </p>
              </li>
            </ul>
            <p className='my-3'>
              Users agree that any information they provide through
              {`Mybitstore's`} services is accurate and complete. Users also
              acknowledge that Mybitstore is not responsible for their omissions
              and errors in the information they provide in connection with any
              transactions initiated through {`Mybitstore's`}
              services. For instance, a mistyped wallet address by a user or the
              provision of incorrect information during a transaction, and the
              consequences of such actions, are not the responsibility of
              Mybitstore. To that end, Mybitstore strongly encourages its users
              to carefully scrutinize any information they provide on the
              Mybitstore website before completing any transactions or in the
              course of using Mybitstore services.
            </p>
            <p className='my-3'>
              No Cancellations or Modifications; Wallet Activities. Users will
              not be able to cancel or modify transactions once they have been
              submitted to the digital currency network. Mybitstore has no
              control over the various digital currency networks and, therefore,
              has no capability to modify or cancel transactions once they have
              been submitted there. Mybitstore also does not store or have
              custody over any locked digital currency since digital currencies
              like Bitcoin are always recorded on the respective blockchains and
              networks. all transactions occur within these networks, not on
              Mybitstore. Mybitstore cannot guarantee that transactions will be
              processed on the digital currency networks, and Mybitstore has the
              sole right to refuse to process transactions if required by
              legislation, or that the transactions are against the terms and
              conditions of Mybitstore. By agreeing to these terms of service,
              the user acknowledges that they take full responsibility for all
              activities that occur under the Wallet and accept all risks of any
              authorized or unauthorized access to your Wallet, to the maximum
              extent permitted by law.
            </p>
            <p className='my-3'>
              Taxes. The user shall comply with tax obligation applicable in
              their jurisdiction and is responsible for determining what taxes
              to pay and when to pay it depending on the nature of transactions.
              By agreeing to these terms of service, the user acknowledges that
              Mybitstore is not responsible for determining what circumstances
              users have to pay tax on their digital currency transactions, or
              for collecting, reporting, withholding or remitting any taxes
              arising from any digital currency transactions.
            </p>
            <p className='my-3'>
              User Reputation. Mybitstore users will have a chance to provide
              feedback and comments on their transactions with other Mybitstore
              users. They will have the chance to file confidential reports if
              they believe that the terms and conditions of this agreement have
              been violated in any way, which may be used in dispute resolution
              as described in Section 8.
            </p>
            <p className='my-3'>
              Transaction History. Mybitstore users have access to their
              transaction histories through their Account. By agreeing to these
              terms of service, the user agrees that the failure of the Services
              to provide such confirmation shall not affect the validity of the
              terms of such transactions
            </p>
            <p className='my-3'>
              Pay-with-Mybitstore. Certain merchants may or have authorization
              from Mybitstore to accept Mybitstore as a payment method for the
              purchase of goods and services online (the “Authorized
              Merchants”). Users can access this function by selecting the
              “Pay-with-Mybitstore” option at check-out or at the time of
              payment. Pay-with-Mybitstore will direct you to our Marketplace to
              access the bitcoin available in your account or connect you to a
              Seller. If you purchase bitcoin from a Seller to complete the
              transaction, the terms set forth in Section 7.1 of this Agreement
              will apply.
            </p>
            <p className='my-3'>
              Merchant Goods. Mybitstore will not share responsibility for any
              goods purchased with an Authorized Merchant with your account, or
              the Pay with Mybitstore. Any and all disputes are to be settled
              with the Authorized Merchant, in line with their terms and
              conditions.
            </p>
            <p className='my-3'>
              Returns, Refunds. When a user purchases a good or service using
              Mybitstore accounts, the purchase is final because Mybitstore will
              not process any refunds or returns. An Authorized Merchant may
              offer you a return, store credit or a gift card in its sole
              discretion and in accordance with its policies.
            </p>
            <p className='my-3'>
              Mybitstore fees that it charges for its services are displayed to
              the user prior to using any service to which a fee applies on the
              Mybitstore website. See “Mybitstore Fees” for further details.
              Mybitstore reserves the right to change or adjust the price and
              fees for services any time.
            </p>
          </div>
          <div className='terms_condition-text'>
            <h1 className='font-medium text-2xl text-white'>
              DISPUTING TRANSACTIONS VIA Mybitstore’S DISPUTE RESOLUTION PROCESS
              :
            </h1>
            <p className='my-3'>
              In many cases, disputing buyers and sellers communicate with each
              other to understand what happened and come to a mutually agreeable
              understanding and solution. When that is not possible, however,
              Mybitstore support team (“Mybitstore Support”) can help. Either
              the buyer or the seller can start the dispute resolution process
              (“disputed transaction” or “dispute”) with respect to a
              transaction. Disputes and dispute resolutions can only be
              conducted on transactions that are marked as fully paid by the
              Buyer. Other stages of transactions like transactions that are not
              marked as fully paid by the Buyer, cancelled by the Buyer,
              automatically cancelled due to expiration of the timeframe set
              forth in the offer, already disputed and resolved or where the
              Seller has released the bitcoin to the Buyer generally cannot be
              disputed, reversed, or altered by Mybitstore
            </p>
          </div>
          <p className='my-3'>
            <em>
              <b>Dispute Resolution Process.</b>
            </em>
            <p>
              Below are the steps Mybitstore Support takes in the event of a
              dispute.
            </p>
          </p>
          <ul className='list-disc my-2 pl-8'>
            <li>
              <p className='my-3'>
                Initiation: You can begin a dispute by logging into your
                Mybitstore Account, opening the transaction you would like to
                dispute and selecting the “dispute” button. The “dispute” button
                will only appear active if the transaction has been marked as
                fully paid by the Buyer. Once the process has been initiated,
                the user will be required to describe the type of dispute and
                its underlying circumstances.
              </p>
            </li>
            <li>
              <p className='my-3'>
                Offers from Mybitstore counterparties have their own terms and
                conditions, vary in exchange rate, speed of exchange, and the{' '}
                {`Seller's`} terms and conditions. By accepting a {`Seller's`}{' '}
                offer, you agree to be bound by the {`Seller's`} terms and
                conditions of that offer. In all cases except when they
                contradict or violate this Agreement, are illegal, are
                unreasonable or otherwise difficult to comply with (as
                determined in {`Mybitstore's`} sole and absolute discretion), or
                if both users of the transaction consent to alter the terms and
                conditions of such offer, the {`Seller's`} terms and conditions
                are valid
              </p>
            </li>
          </ul>
          <p className='my-3'>
            <em>
              <b>
                You can use the following descriptions for a dispute if you are
                a Seller:.
              </b>
            </em>
          </p>
          <ul className='list-disc my-2 pl-8'>
            <li>
              <p className='my-3'>
                Coin locker (i.e. an unresponsive Buyer) - The Buyer has
                acknowledged receipts of funds for the transactions, but is
                unresponsive or inactive.
              </p>
            </li>
            <li>
              <p className='my-3'>
                Payment issue - The Buyer faces issues with the payment service
                after some attempts
              </p>
            </li>
            <li>
              <p className='my-3'>
                Other - Users, if they find that the above options do not
                clearly represent their grievance, can select this option to be
                able to describe what issue gave rise to the dispute. The Buyer
                will be able to view this description
              </p>
            </li>
          </ul>
          <p className='my-3'>
            <em>
              <b>
                The options presented for describing your dispute if you are a
                Buyer are as follows:
              </b>
            </em>
          </p>
          <ul className='list-disc my-2 pl-8'>
            <li>
              <p className='my-3'>
                Unresponsive vendor - Buyer has made the necessary payments
                after meeting all the {`Seller's`} terms, but the Seller is
                unresponsive and inactive.
              </p>
            </li>
            <li>
              <p className='my-3'>
                Payment issue - Buyer has made the necessary payments, but the
                Seller has claimed issues with the payment system and has
                refused to deliver the digital currency.
              </p>
            </li>
            <li>
              <p className='my-3'>
                Other - Buyers can use this option to describe in detail what
                circumstances has led to the dispute. Sellers can also view the
                description.
              </p>
            </li>
          </ul>
          <p className='my-3'>
            <em>
              <b>Notification</b>
            </em>
          </p>
          <ul className='list-disc my-2 pl-8'>
            <li>
              <p className='my-3'>
                Once a user submits a dispute, Mybitstore Support will notify
                the other party by email and the transaction chat feature
                available to both Buyers and Sellers in the Marketplace to alert
                the parties that a disputed has been initiated. Mybitstore will
                provide information on which transaction is being disputed and
                the reasons why the transaction is being disputed.
              </p>
            </li>
          </ul>
          <p className='my-3'>
            <em>
              <b>Response</b>
            </em>
          </p>
          <ul className='list-disc my-2 pl-8'>
            <li>
              <p className='my-3'>
                Users will be required to review the details of the dispute and
                provide Mybitstore Support with a response. Users can provide
                evidence of their explanations, including proof of payments,
                proof of ownership, or proof that payment has been received or
                not.
              </p>
            </li>
          </ul>
          <p className='my-3'>
            <em>
              <b>Mybitstore Review</b>
            </em>
          </p>
          <ul className='list-disc my-2 pl-8'>
            <li>
              <p className='my-3'>
                Mybitstore will also review the disputed transactions and make a
                decision on the dispute based on the evidence provided by both
                the Buyer and Seller. {`Mybitstore's`} review will be based on
                the evaluation system described in Section 8.
              </p>
            </li>
          </ul>
          <p className='my-3'>
            <em>
              <b>Dispute Review</b>
            </em>
          </p>
          <ul className='list-disc my-2 pl-8'>
            <li>
              <p className='my-3'>
                During a dispute review by Mybitstore, instructions may be given
                to the users to follow. Users may, for instance, be required to
                provide additional evidence, provide additional ID verification,
                provide photos, videos and audios, or other documentation that
                Mybitstore deems necessary to resolve disputes between parties
                within a specified period of time. If users fail to follow{' '}
                {`Mybitstore's`} instructions and provide the necessary evidence
                and documentation necessary to make a determination in the
                dispute review, disputes may be resolved against them. Final
                feedback on initiated disputes will typically be provided on the
                transaction chat feature within 30 days of the receipt of the
                dispute. Under some circumstances, however, feedback might take
                longer.
              </p>
            </li>
          </ul>
          <p className='my-3'>
            <em>
              <b>Unresponsiveness</b>
            </em>
          </p>
          <ul className='list-disc my-2 pl-8'>
            <li>
              <p className='my-3'>
                Disputing parties are required to remain active and available
                from the time the transaction begins to the time the transaction
                is completed, canceled or resolved to ensure that they are able
                to provide a response to Mybitstore {`Support's`} requests.
                Unresponsiveness may result in a dispute being decided against
                you
              </p>
            </li>
          </ul>
          <p className='my-3'>
            <em>
              <b>Chargebacks</b>
            </em>
          </p>
          <ul className='list-disc my-2 pl-8'>
            <li>
              <p className='my-3'>
                Parties may face additional risks even if the dispute resolution
                is found in their favor due to the preferred payment method. The
                dispute resolution process described in this Agreement is not
                the same as remedies provided to Buyers and Sellers through the
                payment method used during a transaction. It is not the
                responsibility of Mybitstore to initiate o handle chargebacks,
                and we are not liable if a party reverses a transaction, charges
                back, or disputes a transaction through the avenues made
                available through the payment methods in the transaction,
                including after a dispute is closed.
              </p>
            </li>
          </ul>
          <p className='my-3'>
            <em>
              <b>Dispute Resolution</b>
            </em>
          </p>
          <ul className='list-disc my-2 pl-8'>
            <li>
              <p className='my-3'>
                In resolving issues of disputed transactions, Mybitstore Support
                will most likely move the bitcoin that is the object of the
                dispute to the buyer or the seller of the disputed transaction
                once the dispute resolution process is complete.
              </p>
            </li>
            <li>
              <p className='my-3'>
                The situations and scenarios below serve as an indication of how
                Mybitstore may resolve a disputed transaction. It is not
                intended to be an exhaustive list, and the resolution of
                specific disputes will entirely depend on the specific facts of
                the dispute and the available evidence provided by the user
              </p>
            </li>
          </ul>
          <p className='my-3'>
            <em>
              <b>
                Mybitstore Support may resolve a dispute in the Buyer’s favor
                when at least one of the following criteria are met:
              </b>
            </em>
          </p>
          <ul className='list-disc my-2 pl-8'>
            {/* <li>
                <p className="my-3">
                  Mybitstore Support may resolve a dispute in the Buyer’s favor
                  when at least one of the following criteria are met:
                </p>
              </li> */}
            <li>
              <p className='my-3'>
                The Seller has ceased to be responsive and has not provided a
                sufficient response within the timeframe requested by Mybitstore
                Support.
              </p>
            </li>
            <li>
              <p className='my-3'>
                A third party receives payment or an account not registered in
                the name of the user receives the payment for the transaction.
              </p>
            </li>
          </ul>
          <p className='my-3'>
            <em>
              <b>
                Mybitstore Support may resolve a dispute in the Seller’s favor
                when one of the following criteria are met:
              </b>
            </em>
          </p>
          <ul className='list-disc my-2 pl-8'>
            <li>
              <p className='my-3'>
                Pursuant to the initial instructions provided by the seller in
                the transaction offer, the buyer fails to provide payment for
                the transaction in, or the buyer fails to provide payment in
                full.
              </p>
            </li>
            <li>
              <p className='my-3'>
                The payment provider has held, frozen or stopped the payment for
                the transaction, including situations of chargebacks or a
                complaint of a disputed payment through the Bank or a payment
                card issuer.
              </p>
            </li>
            <li>
              <p className='my-3'>
                The Buyer has failed to respond, or has not provided a
                sufficient response within the timeframe requested Mybitstore
                Support.
              </p>
            </li>
            <li>
              <p className='my-3'>
                Third parties or unrecognized accounts (accounts not registered
                in the name of the Buyer) make the payments for a transaction.
              </p>
            </li>
          </ul>
          <p className='my-3'>
            Mybitstore Support has the sole discretion to resolve against and
            terminate or suspend the account of Buyers or Sellers of disputed
            transactions who provide fraudulent information or fraudulent
            documentation, or make false claims, or use otherwise deceptive
            tactics during dispute resolutions.
          </p>
          <p className='my-3'>
            Mybitstore Support also has the prerogative to resolve a dispute
            between a Buyer and a Seller by sharing the bitcoin subject to the
            dispute either evenly or unevenly if neither party fulfils the
            criteria outlined during the transaction, or it is unclear or
            impossible to determine which party has fulfilled the dispute
            resolution criteria outlined by Mybitstore.
          </p>
          <p className='my-3'>
            <em>
              <b>Appeal</b>
            </em>
            . Users have a right to request an appeal if they believe that the
            dispute has been resolved in such a manner inconsistent with the
            provisions of this Agreement. Appeals can be notified by promptly
            notifying Mybitstore in writing through Mybitstore Customer Support
            no later than ten (10) calendar days after Mybitstore {`Support's`}{' '}
            decision has been delivered. Sufficient details and evidence is
            required by Mybitstore to justify the request for appeal. Your
            appeal should specifically identify how you believe Mybitstore
            incorrectly resolved the dispute as per the terms of this Agreement
            and provide evidence of such incorrect decision.
          </p>
          <p className='my-3'>
            Please, note that when using the services of Mybitstore, Users are
            obligated to be civil and respectful to other users and Mybitstore
            Support. See generally, “Section 13 - Prohibited Use”.
          </p>
          <p className='my-3'>
            <em>
              <b>Finality</b>
            </em>
            . By agreeing to this term of Service, you acknowledge that{' '}
            {`Mybitstore's`} decision regarding a dispute is final and binding
            as described in this agreement. We are not liable to either the
            Buyer or Seller in connection to its decisions during a dispute
            resolution process.
          </p>
          <div className='terms_condition-text'>
            <h1 className='font-medium text-2xl text-white'>
              FEES FOR USING Mybitstore SERVICES:{' '}
            </h1>
            <p className='my-3'>
              Creating a Wallet on Mybitstore is free however, Mybitstore
              charges fees for Services. The applicable fees will be displayed
              prior to you using any Service to which a fee applies. See
              “Mybitstore Fees” for further details. Our fees are subject to
              change and Mybitstore reserves the right to adjust its pricing and
              fees and at any time.
            </p>
          </div>
          <div className='terms_condition-text'>
            <h1 className='font-medium text-2xl text-white'>
              DISCONTINUANCE OF SERVICES:{' '}
            </h1>
            <p className='my-3'>
              Mybitstore has the right to discontinue or modify, temporarily or
              permanently, any portion of its services with or without prior
              notice, and at no cost to the user.
            </p>
          </div>
          <div className='terms_condition-text'>
            <h1 className='font-medium text-2xl text-white'>
              SUSPENSION OR TERMINATION OF SERVICES &amp; ACCOUNT; LIMITING
              ACCESS TO YOUR WALLET:{' '}
            </h1>
            <p className='my-3'>
              Mybitstore may in its sole and absolute discretion, immediately
              and without prior notice:
            </p>
            <ul className='list-disc my-2 pl-8'>
              <li>
                <p className='my-3'>
                  (a) suspend, restrict, or terminate a user’s access to any or
                  all of {`Mybitstore's`} Services, including limiting access to
                  your Wallet, and/or
                </p>
              </li>
              <li>
                <p className='my-3'>
                  (b) Deactivate or cancel your account if: <br />
                  <span>
                    i. we are mandated by the law or government authorities
                    through a facially valid subpoena, court order, or a binding
                    order of a government authority;
                  </span>
                  <br />
                  <span>
                    ii. we, with reason, suspect that you have or may have
                    violated this agreement;
                  </span>
                  <span>
                    iii. The use of your account is subject to any pending
                    litigation, investigation, or government proceeding and/or,
                    we have good reason to suspect a heightened risk of legal or
                    regulatory non-compliance associated with your account
                    activity;
                  </span>
                  <br />
                  <span>
                    iv. Our service partners are unable to support your use;
                  </span>
                  <br />
                  <span>
                    v. your activities are considered as efforts to circumvent
                    out control and protocols and procedures or
                  </span>
                  <br />
                  <span>
                    vi. We think deactivating or canceling your account will
                    protect us, our users (including you), or our employees from
                    danger or loss.
                  </span>
                </p>
              </li>
            </ul>
            <p className='my-3'>
              Mybitstore will not be held responsible for any consequences if we
              exercise our rights to limit or refuse your access to our services
              under the above. Mybitstore will not be liable for any delays,
              damage or inconvenience you may suffer as a result.
            </p>
          </div>
          <p className='my-3'>
            If we suspend or close your account, terminate your use of the
            Services for any reason, or limit access to your Wallet, we will
            attempt to notify you of our actions unless a court order or other
            legal obligations prevents or prohibits us from notifying you.
          </p>
          <p className='my-3 '>
            By agreeing to this terms of service, you acknowledge that{' '}
            {`mybitstore's`} decision to take certain courses of action, which
            includes limiting access to, suspending, or closing your account or
            wallet, may be as a result of information gathered from confidential
            sources or based on confidential criteria that are essential to
            managing the risk of mybitstore and maintaining our security
            protocols.You also agree that mybitstore is under no obligation to
            disclose the details of its risk management and security procedures
            to you.
          </p>
          <p className='my-3'>
            Mybitstore will remove, as soon as possible, any restrictions or
            suspension on your account and wallet once the reasons for the
            suspension or restrictions have been removed or no longer exists.
            However, Mybitstore is under no obligation to notify you when such
            suspension or restriction will be removed, if ever
          </p>
          <p className='my-3'>
            If you are holding bitcoin in your Mybitstore Wallet and there has
            been no activity in your account for a period of time prescribed by
            applicable law, we may be required to report such remaining bitcoin
            in your account as unclaimed property in accordance with abandoned
            property and escheat laws. Written notices will be delivered to you
            if this action needs to be taken. Failure to respond to the written
            notice within seven (7) business days of receipt, or within a
            timeframe required by law, will result in Mybitstore delivering your
            bitcoin to the local jurisdiction as unclaimed property. Mybitstore
            reserves the right to charge administrative expenses and deduct
            dormancy fees or other administrative charges from such unclaimed
            bitcoin.
          </p>
          <div className='terms_condition-text'>
            <h1 className='font-medium text-2xl text-white'>
              PROHIBITED USE:{' '}
            </h1>
            <ul className='list-disc my-2 pl-8'>
              <li>
                <p className='my-3'>
                  Mybitstore users will only use the services available on
                  Mybitstore in accordance with the agreed terms and conditions
                  in this Agreement (including Privacy Policy), and not commit
                  any unlawful acts. Users are solely responsible for their
                  conduct while using the services of Mybitstore. Without
                  limiting the generality of the foregoing, you agree that you
                  will not:
                </p>
              </li>
              <li>
                <p className='my-3'>
                  Use the services of Mybitstore in such a manner that will
                  interfere with, disrupt, negatively affect, or inhibit other{' '}
                  {`users'`} patronization of {`Mybitstore's`} services, or that
                  could negatively impact the functioning of Mybitstore’s
                  services.
                </p>
              </li>
              <li>
                <p className='my-3'>
                  Engage in activities that constitute a violation of the any
                  law or assists in the violation of any law, statute,
                  ordinance, or regulation within jurisdictions that Mybitstore
                  conducts business. Users will not also engage in activities
                  which would involve the use of funds obtained from unlawful
                  activity, as well as publish, distribute or disseminate any
                  unlawful material or information on the Mybitstore website;
                </p>
              </li>
              <li>
                <p className='my-3'>
                  Interfere with another {`user’s`} access to or use of any of
                  our Services. Users will not defame, abuse, extort, harass,
                  stalk, threaten or otherwise violate or infringe the legal
                  rights of other users. Users will also not incite, threaten,
                  facilitate, promote, or encourage hate, racial intolerance, or
                  violent acts against others; harvest or otherwise collect
                  information from our Website about other users;
                </p>
              </li>
              <li>
                <p className='my-3'>
                  Engage in any activity intended to defraud, defame or
                  otherwise cause any damage to Mybitstore or our users. Users
                  will also not provide any false, inaccurate, deceptive or
                  misleading information to Mybitstore or to another user in
                  connection with our Services in line with this Agreement;
                </p>
              </li>
              <li>
                <p className='my-3'>
                  Introduce to the Services any virus, worms, logic bombs or
                  other harmful materials; use any robot, spider, crawler,
                  scraper or other automated means or interface not provided by
                  us to access our Services or to extract data.Users will also
                  not attempt to circumvent any content filtering techniques we
                  employ, or attempt to access any service or area of our
                  Services that they are not authorized to access.Users will
                  avoid the placement anywhere within
                  {`Mybitstore's`} Marketplace of any advertisement or promotion
                  that would facilitate buying or selling bitcoins outside of{' '}
                  {`Mybitstore's`} Services;
                </p>
              </li>
              <li>
                <p className='my-3'>
                  Engage in transactions involving items that infringe or
                  violate any copyright, trademark, right of publicity or
                  privacy or any other proprietary right under the law, or other
                  licensed materials without the appropriate authorization from
                  the rights holder; use of Mybitstore intellectual property,
                  name, or logo, including use of Mybitstore’s trade or service
                  marks, without prior written consent from us or in a manner
                  that otherwise harms Mybitstore or the Mybitstore brand.Any
                  action that implies an untrue endorsement by or affiliation
                  with Mybitstore; or develop any third-party applications that
                  interact with our Services without our prior written consent
                  is prohibited;
                </p>
              </li>
              <li>
                <p className='my-3'>
                  Encourage or induce any third party to engage in any of the
                  activities prohibited under this Section 13.
                </p>
              </li>
            </ul>
          </div>
          <div className='terms_condition-text'>
            <h1 className='font-medium text-2xl text-white'>
              INTELLECTUAL PROPERTY RIGHTS:{' '}
            </h1>
            <ul className='list-disc my-2 pl-8'>
              <li>
                <p className='my-3'>
                  Mybitstore grants its users a limited, revocable,
                  nonexclusive, nontransferable license, subject to the terms
                  and conditions in this Agreement, to access and use the
                  Services, Website, and related content, materials, information
                  (collectively, the “Content”) solely for the
                  Mybitstore-approved purposes. Any other use of{' '}
                  {`Mybitstore's`} website and content is strictly prohibited,
                  and all other rights, titles, and interests in in the
                  Services, Website or Content is the exclusive property of
                  Mybitstore .Through this Agreement, any copy, transmission,
                  distribution, sale, licensing, reverse engineering,
                  modification, publishing, or participation in the transfer or
                  sale of, or the creation of derivative works from , or in any
                  other way exploiting any content in whole or in part of
                  Mybitstore without a clear prior written consent of Mybitstore
                  is strictly prohibited. You may not copy, imitate or use any
                  of {`Mybitstore's`} trademarks, registered marks, logos or any
                  of its intellectual property without {`Mybitstore's`} prior
                  written consent.
                </p>
              </li>
              <li>
                <p className='my-3'>
                  It is the intention of Mybitstore to provide timely and
                  accurate information on its Website. However, the website and
                  its content may not always be entirely accurate, complete or
                  current, and may include technical inaccuracies or
                  typographical errors. Mybitstore, in an effort to ensure that
                  its users have the most updated and accurate information
                  possible, may be changed or updated periodically without
                  notice to its users. Users should endeavor to verify all
                  information before relying on it, and all decisions based on
                  information contained on the Mybitstore Website are your sole
                  responsibility and we shall have no liability for such
                  decisions. Third party-sourced information is strictly for
                  informational purposes only, and Mybitstore makes no warranty
                  of its accuracy. Links to the sources of these information may
                  be provided on the Mybitstore website as a convenience to the
                  users, but the websites linked are not controlled by
                  Mybitstore .By agreeing to this Terms of Service, you as a
                  User acknowledge that Mybitstore is not responsible for any
                  inaccurate information, content, or services contained in any
                  third-party materials or on any third-party website accessible
                  or linked to the Mybitstore website.
                </p>
              </li>
            </ul>
          </div>
          <div className='terms_condition-text'>
            <h1 className='font-medium text-2xl text-white'>
              FEEDBACK AND USER SUBMISSIONS{' '}
            </h1>
            <ul className='list-disc my-2 pl-8'>
              <li>
                <p className='my-3'>
                  Mybitstore is always working to improve its Services and the
                  Website. Users can submit ideas and suggestions for the
                  improvement of {`Mybitstore's`} website and services. Any
                  submission will, however, be subject to the outlined terms and
                  conditions in this Agreement.
                </p>
              </li>
              <li>
                <p className='my-3'>
                  No disclosures of any idea or feedback, or any related
                  materials to Mybitstore will, under no circumstances, be
                  subject to any obligation of confidentiality or expectation of
                  compensation. This also applies to Mybitstore’s subsidiaries,
                  parents or affiliated companies, or any of their officers,
                  directors, managers, members, shareholders, employees and
                  agents, or their heirs, successors, representatives and
                  assigns (each a “Mybitstore Party” and collectively, the
                  “Mybitstore Parties”).
                </p>
              </li>
              <li>
                <p className='my-3'>
                  Ideas or Feedback and any related material that are submitted
                  by users to the Mybitstore or any Mybitstore party would be
                  subject to intellectual property rights (the “Work”).By the
                  submission, you grant to Mybitstore, a non-exclusive,
                  perpetual, worldwide royalty free license to use all of the
                  content of such ideas and feedback, for any purpose
                  whatsoever. In addition to that, you are waive any moral
                  rights to the fullest extent permitted under Ghanaian law that
                  you may have in the Work and are representing and warranting
                  to such Mybitstore Party that the Work are wholly original
                  with you, that no one else has any rights in the Work and that
                  all Mybitstore Parties are free of any royalty to implement
                  the Work and to use the related material if so desired, as
                  provided or as modified by any Mybitstore Party, without
                  obtaining permission or license from any third party.
                </p>
              </li>
              <li>
                <p className='my-3'>
                  You also acknowledge that Mybitstore may sub-license any
                  Mybitstore Parties to use the submitted suggestions, ideas and
                  any related materials in any Work and material.
                </p>
              </li>
              <li>
                <p className='my-3'>
                  Mybitstore also reserves the right to remove any posting to
                  the Mybitstore website without warning or reason.
                </p>
              </li>
            </ul>
          </div>
          <div className='terms_condition-text'>
            <h1 className='font-medium text-2xl text-white'>
              HOW TO CONTACT US{' '}
            </h1>
            <ul className='list-disc my-2 pl-8'>
              <li>
                <p className='my-3'>
                  We recommend you visit our FAQ page before contacting us .In
                  the event that the FAQ page does not contain the information
                  you are looking for, Mybitstore offers 24/7 support. You may
                  contact us through our support widget located on the FAQ page.
                </p>
              </li>
            </ul>
          </div>
          <div className='terms_condition-text'>
            <h1 className='font-medium text-2xl text-white'>FORCE MAJEURE </h1>
            <ul className='list-disc my-2 pl-8'>
              <li>
                <p className='my-3'>
                  Mybitstore shall not be responsible for delays, performance
                  failures, or service interruptions as a direct or indirect
                  result of conditions beyond our control. Such conditions
                  include, but are not limited to, significant market
                  volatility, any delay or failure due to an act of God, act of
                  civil or military authorities, acts of terrorism, civil
                  disturbances, war, strikes, and other occurrences being out of
                  the reasonable control of Mybitstore and shall not affect the
                  validity and enforceability of any remaining provisions of
                  this Agreement.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Terms;
