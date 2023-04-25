import { ReactNode } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faPhone,
  faVoicemail,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen flex-col justify-between">
      <Header1>
        <Header1Item>
          <Image
            src="/images/color-logo-no-bg.png"
            width={200}
            height={200}
            alt="color-logo-no-bg"
          />
        </Header1Item>
        <Header1Item>
          <div className="text-center">
            <h1>Mobile IV Therapy</h1>
            <h1>in the East Valley</h1>
          </div>
        </Header1Item>
        <Header1Item>
          <a
            href="https://desertivsolutions.as.me/schedule.php"
            target="_blank"
            rel="noreferrer"
            className="no-underline"
          >
            <div className="rounded-full border-4 border-black bg-primary p-4 text-center font-bold text-black">
              Schedule an Appointment!
            </div>
          </a>
        </Header1Item>
      </Header1>

      <div
        className="bg-[url('/images/runner-bg.png')] py-8"
        style={{
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
        }}
      >
        <ContentContainer>
          <div
            id="section-2"
            className="my-8 grid gap-y-8 py-8 text-center text-white"
          >
            <h1 className="text-7xl drop-shadow-black">
              Mobile IV Therapy in the East Valley
            </h1>
            <div className="text-3xl drop-shadow-black">
              MAXIMIZE YOUR BODY'S NATURAL POTENTIAL
            </div>
            <div className="text-xl drop-shadow-black">
              What is IV Therapy? IV therapy delivers medical grade fluids
              intravenously as well as medications and vitamins directly into
              your bloodstream and helps provide rapid relief from fatigue, jet
              lag, hangovers, flu symptoms, and overall dehydration.
            </div>
            <div className="text-xl drop-shadow-black">
              If you live in or are visiting Arizona, Call or Text us to create
              your custom IV Therapy at Desert IV Solutions to perfectly fit
              your body's unique needs. Whether you're prepping or recovering,
              IV Therapy should be on your list to do whenever possible.
            </div>
            <div className="flex justify-center drop-shadow-xl">
              <a href="tel:4807903045">
                <div className="rounded-full border-4 border-white bg-primary p-5 text-center font-bold">
                  CALL NOW - (480) 790-3045
                </div>
              </a>
            </div>
          </div>
        </ContentContainer>
      </div>

      <div
        className="bg-[url('/images/group.png')] py-8"
        style={{
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
        }}
      >
        <ContentContainer>
          <div
            id="section-2"
            className="my-8 grid gap-y-8 py-8 text-center text-white"
          >
            <h1 className="text-7xl drop-shadow-black">
              Group IV Therapy in The East Valley
            </h1>
            <div className="text-3xl drop-shadow-black">
              SCHEDULE YOUR PARTY'S MOBILE IM TODAY!
            </div>
            <div className="text-xl drop-shadow-black">
              Traveling to Mesa, Gilbert or Chandler with your group for an
              event? No worries, we have you covered! We have plenty of
              experience taking care of groups of any size. Our professional
              staff will come out, make you feel comfortable, and help you feel
              better right away! Our top priority is you.
            </div>
            <div className="flex justify-center drop-shadow-xl">
              <a href="tel:4807903045">
                <div className="rounded-full border-4 border-white bg-primary p-5 text-center font-bold">
                  CALL NOW - (480) 790-3045
                </div>
              </a>
            </div>
          </div>
        </ContentContainer>
      </div>

      <ContentContainer>
        <div className="grow">
          {/* <div id="section-2" className="my-8 text-center">
            <h1 className="my-8">Mobile IV Therapy in the East Valley</h1>
            <div className="my-8">MAXIMIZE YOUR BODY'S NATURAL POTENTIAL</div>
            <div className="my-8">
              What is IV Therapy? IV therapy delivers medical grade fluids
              intravenously as well as medications and vitamins directly into
              your bloodstream and helps provide rapid relief from fatigue, jet
              lag, hangovers, flu symptoms, and overall dehydration.
            </div>
            <div className="my-8">
              If you live in or are visiting Arizona, Call or Text us to create
              your custom IV Therapy at Desert IV Solutions to perfectly fit
              your body's unique needs. Whether you're prepping or recovering,
              IV Therapy should be on your list to do whenever possible.
            </div>

            <div className="my-8 flex justify-center">
              <a href="tel:4807903045">
                <div className="rounded-full border-4 border-primary bg-primary p-4 text-center font-bold text-black hover:border-black">
                  CALL NOW - (480) 790-3045
                </div>
              </a>
            </div>
          </div> */}

          {/* <div id="section-3" className="my-8 text-center">
            <h1 className="my-8">Group IV Therapy in The East Valley</h1>
            <div className="my-8">SCHEDULE YOUR PARTY'S MOBILE IM TODAY!</div>
            <div className="my-8">
              Traveling to Mesa, Gilbert or Chandler with your group for an
              event? No worries, we have you covered! We have plenty of
              experience taking care of groups of any size. Our professional
              staff will come out, make you feel comfortable, and help you feel
              better right away! Our top priority is you.
            </div>
            <div className="my-8 flex justify-center">
              <a href="tel:4807903045">
                <div className="rounded-full border-4 border-primary bg-primary p-4 text-center font-bold text-black hover:border-black">
                  CALL NOW - (480) 790-3045
                </div>
              </a>
            </div>
          </div> */}
        </div>
      </ContentContainer>

      <div className="">
        <div
          className="bg-image  bg-[url('/images/bg-hydrate-revital.png')] py-8"
          style={{
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
            position: "relative",
          }}
        >
          <div className="bg-image-first-child ">
            <ContentContainer>
              <div id="section-4" className="my-8 py-8">
                <div className="grid md:grid-cols-2">
                  <div className="p-1">
                    <h1>HYDRATE & REVITALIZE.</h1>
                    <div className="text-lg">
                      Feeling fatigued, dealing with a migraine you can't get
                      rid of, or has your skin lost its glow? Most people don't
                      realize that they are already dehydrated. At Desert IV
                      Solutions, our IV drip therapies will deliver hydration,
                      vitamins, minerals, nutrients, medications, and
                      antioxidants, all helping to restore your body's hydration
                      levels. This will give you the energy you need, making you
                      feel and look better, helping you maximize overall
                      wellness with benefits typically lasting several days.
                    </div>
                  </div>
                  <div className="m-auto justify-self-center p-1">
                    <Image
                      src="/images/hydrate-and-revitalize.png"
                      width={1000}
                      height={1000}
                      alt="hydrate-and-revitalize"
                    />
                  </div>
                </div>
              </div>
            </ContentContainer>
          </div>
        </div>
      </div>

      <ContentContainer>
        <div>
          <div id="section-5" className="my-8 py-8">
            <h1 className="mb-2 text-center">
              Desert IV Solution's Most Popular IV's
            </h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <IVOptionGridItem>
                <IVOption
                  title="Desert Simply Dry (rehydrate)"
                  price={100}
                  imageSrc="/images/desert-simply-dry.png"
                  imageAlt="desert-simply-dry"
                  description="A quick relief at home with basic IV fluid, no additional vitamins or medicine."
                  contents={["1 Liter of Normal saline"]}
                />
              </IVOptionGridItem>
              <IVOptionGridItem>
                <IVOption
                  title="Desert Cold/Flu (Feeling under the weather)"
                  price={145}
                  imageSrc="/images/desert-cold-flu.png"
                  imageAlt="desert-cold-flu"
                  description="Feeling sick? Give your immune system an additional layer of protection."
                  contents={[
                    "1 Liter of Normal Saline",
                    "B Complex (B1, B2, B3, B5, B6)",
                    "B12",
                    "Vitamin C",
                    "Zinc",
                  ]}
                />
              </IVOptionGridItem>
              <IVOptionGridItem>
                <IVOption
                  title="Desert Prickly Pear (Hangover Relief)"
                  price={155}
                  imageSrc="/images/desert-prickly-pear.png"
                  imageAlt="desert-prickly-pear"
                  description="Long night of overindulgence? We will help you reverse those symptoms and feel better."
                  contents={[
                    "1 Liter of Normal saline",
                    "B Complex (B1, B2, B3, B5, B6)",
                    "Anti-nausea",
                    "Anti-inflammatory reliever",
                  ]}
                />
              </IVOptionGridItem>
              <IVOptionGridItem>
                <IVOption
                  title="Desert A Performance (Athletic recovery)"
                  price={165}
                  imageSrc="/images/desert-a-performance.png"
                  imageAlt="desert-a-performance"
                  description="For athletes or fitness enthusiasts, this IV Drip combines fluids antioxidants and pain relievers that will help optimize your fitness potential for faster recovery."
                  contents={[
                    "1 Liter of Normal Saline",
                    "B Complex (B1, B2, B3, B5, B6)",
                    "Amino Blend",
                    "Mineral Blend",
                    "Vitamin C",
                  ]}
                />
              </IVOptionGridItem>
              <IVOptionGridItem>
                <IVOption
                  title="Desert Myer's Cocktail (Wellness for all)"
                  price={190}
                  imageSrc="/images/desert-myers-cocktail.png"
                  imageAlt="desert-myers-cocktail"
                  description="Created by the late Dr. John Myers, this multivitamin cocktail is effective for acute asthma attacks, migraines, fatigue (including chronic fatigue syndrome), acute muscle spasms, colds, chronic sinusitis, seasonal allergies, chronic depression/anxiety and other disorders."
                  contents={[
                    "1 Liter of Normal Saline",
                    "B Complex (B1,B2.B3,B5,B6)",
                    "B12",
                    "Glutathione",
                    "Vitamin C",
                    "Zinc",
                    "Magnesium",
                  ]}
                />
              </IVOptionGridItem>
              <IVOptionGridItem>
                <IVOption
                  title="Desert Beauty (For skin, nails & hair)"
                  price={175}
                  imageSrc="/images/desert-beauty.png"
                  imageAlt="desert-beauty"
                  description="Rejuvenate your skin and help combat signs of aging. Youthful restoration that focuses on hair, skin and nails."
                  contents={[
                    "1 Liter of Normal Saline",
                    "B Complex (B1,B2,B3,B5,B6)",
                    "Biotin",
                    "Vitamin C",
                  ]}
                />
              </IVOptionGridItem>
            </div>
          </div>

          <div id="section-6" className="my-8">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="m-auto justify-self-center p-1">
                <Image
                  src="/images/desert-add-ons.png"
                  width={1000}
                  height={1000}
                  alt="desert-add-ons"
                />
              </div>
              <div>
                <h1>Desert Add On's</h1>
                <div>$25 - $35</div>
                <div className="gap-2">
                  <li className="list-disc">Glutathione</li>
                  <li className="list-disc">Vitamin C</li>
                  <li className="list-disc">Zinc</li>
                  <li className="list-disc">Magnesium</li>
                  <li className="list-disc">Zofran -Anti-nausea </li>
                  <li className="list-disc">
                    Toradol- Anti-inflammatory/Pain reliever
                  </li>
                  <li className="list-disc">
                    Pepcid- Antacid/Heartburn reliever
                  </li>
                  <li className="list-disc">Benadryl- Antihistamine</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>

      <ContentContainer>
        <div id="section-4" className="my-8 py-8">
          <div className="grid md:grid-cols-2">
            <div className="p-1 md:justify-self-center">
              <h1>Group Discounts</h1>
              <div>A great option for parties!</div>
              <div className="gap-2">
                <li className="list-disc">
                  10% discount for four to nine patients
                </li>
                <li className="list-disc">15% discount for 10-19 patients</li>
                <li className="list-disc">
                  20% discount for 20 patients and above
                </li>
              </div>
            </div>
            <div className="p-1 md:justify-self-center">
              <h1>After Hours</h1>
              <div>
                <div>After - Hours $100 - $300</div>
                <div>Extra $100 - 8 PM - Midnight</div>
                <div>Extra $300 - Midnight - 8 AM</div>
                <div>
                  *Subject to availability - additional fees (collected prior to
                  the call)
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>

      <div className="bg-primary ">
        <div
          className="bg-[url('/images/feel-good.png')] py-20"
          style={{
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
          }}
        >
          <ContentContainer>
            <div
              id="section-9"
              className="my-8 py-8 text-white drop-shadow-black"
            >
              <h1>Feel Good Inside & Out!</h1>
              <div>
                IV Therapy is the fastest way to get your body the vitamins and
                fluids it needs to help alleviate the uncomfortable symptoms
                associated with dehydration. The intravenous route is the
                fastest delivery method because it introduces the benefits of
                the IV drip directly to your circulation, replacing fluids,
                nutrients and vitamins throughout your body.
              </div>
              <div>Benefits of Our IV therapy </div>
              <div className="gap-2">
                <li className="list-disc">Increase energy</li>
                <li className="list-disc">Boost immunity</li>
                <li className="list-disc">Cleanse and Detox</li>
                <li className="list-disc">Instant Hydration </li>
                <li className="list-disc">Immediate results</li>
                <li className="list-disc">100% vitamin absorption</li>
              </div>
            </div>
          </ContentContainer>
        </div>
      </div>

      <ContentContainer>
        <div className="grow">
          <div id="section-10" className="my-8">
            <div>
              <div>
                <h1 className="text-center">Contact Us!</h1>
                <div className="flex justify-center gap-4">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-fbBlue p-8 text-center">
                    <a
                      href="https://www.facebook.com/desertivsolutions"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faFacebook}
                        color="white"
                        size="2xl"
                      />
                    </a>
                  </div>
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-igPurpleRed p-8 text-center">
                    <a
                      href="https://www.instagram.com/desertivsolutions/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        color="white"
                        size="2xl"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-8 grid gap-x-4 text-center md:grid-cols-3">
              <div className="rounded-lg border-4 border-grey p-5 shadow-md">
                <div className="m-auto justify-self-center p-1">
                  <div className="relative m-auto flex h-12 w-12 items-center justify-center rounded-full bg-grey p-8 text-center">
                    <FontAwesomeIcon icon={faClock} color="black" size="2xl" />
                  </div>
                  <div className="mt-2">
                    <div>Hours of Operation</div>
                    <div>By Appointment Only</div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border-4 border-grey p-5 shadow-md">
                <div className="m-auto justify-self-center p-1">
                  <div className="relative m-auto flex h-12 w-12 items-center justify-center rounded-full bg-grey p-8 text-center">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      color="black"
                      size="2xl"
                    />
                  </div>
                  <div className="mt-2">
                    <div>Email</div>
                    <div>riza@desertivsolutions.com</div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border-4 border-grey p-5 shadow-md">
                <div className="m-auto justify-self-center p-1">
                  <div className="relative m-auto flex h-12 w-12 items-center justify-center rounded-full bg-grey p-8 text-center">
                    <FontAwesomeIcon icon={faPhone} color="black" size="2xl" />
                  </div>
                  <div className="mt-2">
                    <div>Phone</div>
                    <div>480 - 790 - 3045</div>
                  </div>
                </div>
              </div>
            </div>

            <div>TODO: Form</div>
          </div>

          <div id="section-11" className="my-8">
            <div className="flex justify-center">
              <Image
                src="/images/color-logo-no-bg.png"
                width={200}
                height={200}
                alt="color-logo-no-bg"
              />
            </div>
            <div>We Accept The Following Payments</div>
            <div>
              We accept cash, PayPal, Venmo, Zelle, and all major credit cards.
              Our services are also HSA (Health Savings Account) approved!
            </div>

            <div className="grid gap-2 text-center md:grid-cols-5">
              <div className="m-auto justify-self-center p-1">
                <Image
                  src="/images/venmo.png"
                  width={200}
                  height={200}
                  alt="venmo"
                />
              </div>

              <div className="m-auto justify-self-center p-1">
                <Image
                  src="/images/zelle.png"
                  width={200}
                  height={200}
                  alt="zelle"
                />
              </div>
              <div className="m-auto justify-self-center p-1">
                <Image
                  src="/images/paypal.png"
                  width={100}
                  height={100}
                  alt="paypal"
                />
              </div>
              <div className="m-auto justify-self-center p-1">
                <Image
                  src="/images/cards.png"
                  width={200}
                  height={200}
                  alt="cards-accepted"
                />
              </div>

              <div className="m-auto justify-self-center p-1">
                <h1>Cash</h1>
              </div>
            </div>

            <div className="text-center">
              <div>DISCLAIMER</div>
              <div>
                If you think you may have a medical emergency, immediately call
                your doctor or dial 911
              </div>
              <div>
                This website does not provide medical advice. It is intended for
                informational purposes only. It is not a substitute for
                professional medical advice, diagnosis or treatment. Never
                ignore professional medical advice in seeking treatment because
                of something you read on the internet. These statements have not
                been evaluated by the Food and Drug Administration.
              </div>
            </div>

            <div className="text-center">
              <div>At Desert IV Solutions</div>
              <div>Serving the East Valley</div>
              <div>
                Mesa, Tempe, Chandler, Gilbert, Ahwatukee, Queen Creek, San Tan
                Valley
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>

      <Footer />
    </main>
  );
}

type IVOptionGridItem = {
  children: ReactNode;
};
function IVOptionGridItem({ children }: IVOptionGridItem) {
  return <div className="w-full justify-self-center p-1">{children}</div>;
}

type IVOptionProps = {
  title: string;
  price: number;
  imageSrc: string;
  imageAlt: string;
  description: string;
  contents: string[];
};

function IVOption({
  title,
  price,
  imageSrc,
  imageAlt,
  description,
  contents,
}: IVOptionProps) {
  return (
    <div className="grid h-full grid-cols-1 content-between gap-4 rounded shadow-lg">
      <div className="grid gap-2">
        <div className="justify-self-center">
          <Image src={imageSrc} width={1000} height={1000} alt={imageAlt} />
        </div>
        <div className="px-4">
          <h3>{title}</h3>
          <div>{description}</div>
          <div className="gap-2">
            {contents.map((content) => (
              <li className="list-disc" key={content}>
                {content}
              </li>
            ))}
          </div>
        </div>
      </div>
      <div className="px-2 pb-4">
        <div className="m-2 text-center font-bold">${price}</div>
        <a
          href="https://desertivsolutions.as.me/schedule.php"
          target="_blank"
          rel="noreferrer"
          className="no-underline"
        >
          <div className="rounded-full border-4 border-primary bg-primary p-4 text-center font-bold text-black hover:border-black">
            Book Now!
          </div>
        </a>
      </div>
    </div>
  );
}

type Header1Props = {
  children: ReactNode;
};
function Header1({ children }: Header1Props) {
  return (
    <div className="bg-primary">
      <ContentContainer>
        <div className="grid gap-4 py-8 md:grid-cols-3">{children}</div>
      </ContentContainer>
    </div>
  );
}

type Header1ItemProps = {
  children: ReactNode;
};
function Header1Item({ children }: Header1ItemProps) {
  return <div className="m-auto justify-self-center p-1">{children}</div>;
}

function Footer() {
  return (
    <div className="bg-primary">
      <ContentContainer>
        <div className="py-8">
          <h2 className="text-center">
            Desert IV Solutions - 2022 - All Rights Reserved
          </h2>
        </div>
      </ContentContainer>
    </div>
  );
}

type ContentContainerProps = {
  children: ReactNode;
};
function ContentContainer({ children }: ContentContainerProps) {
  return <div className="container mx-auto px-4">{children}</div>;
}
