import { ReactNode } from "react";
import Image from "next/image";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "@formspree/react";
import { Formik, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

type HomeSsp = {
  year: number;
};

export const getServerSideProps: GetServerSideProps<HomeSsp> = async () => {
  const year = new Date().getFullYear();
  return { props: { year } };
};

export default function Home(
  homeSsp: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <main className="mx-auto flex min-h-screen flex-col justify-between">
      <div className="bg-primary">
        <ContentContainer disableYPadding>
          <div className="my-4 md:flex md:justify-between">
            <div className="flex justify-start gap-4">
              <h2 className="hidden items-center md:flex">
                Desert IV Solutions
              </h2>
            </div>
            <div className="mb-4 flex justify-center md:mb-0">
              <Image
                src="/images/color-logo-no-bg.png"
                width={200}
                height={200}
                alt="color-logo-no-bg"
              />
            </div>
            <div className="flex justify-center gap-4">
              <div className="items-center sm:flex">
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
              </div>
            </div>
          </div>
        </ContentContainer>
      </div>

      {/* <Header1>
        <Header1Item>
          <Image
            src="/images/desert-icon-sm.svg"
            width={100}
            height={100}
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
      </Header1> */}

      <div
        className="bg-[url('/images/first-2.JPG')] py-8"
        style={{
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
        }}
      >
        <ContentContainer>
          <div id="section-2" className="grid gap-y-8 text-center text-white">
            <h1 className="text-7xl drop-shadow-black">
              Mobile IV Therapy in the East Valley
            </h1>
            <div className="text-3xl drop-shadow-black">
              MAXIMIZE YOUR BODY&apos;S NATURAL POTENTIAL
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
              your body&apos;s unique needs. Whether you&apos;re prepping or
              recovering, IV Therapy should be on your list to do whenever
              possible.
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
            <div id="section-4">
              <div className="grid md:grid-cols-2">
                <div className="p-1">
                  <h1>HYDRATE & REVITALIZE.</h1>
                  <div className="text-lg">
                    Feeling fatigued, dealing with a migraine you can&apos;t get
                    rid of, or has your skin lost its glow? Most people
                    don&apos;t realize that they are already dehydrated. At
                    Desert IV Solutions, our IV drip therapies will deliver
                    hydration, vitamins, minerals, nutrients, medications, and
                    antioxidants, all helping to restore your body&apos;s
                    hydration levels. This will give you the energy you need,
                    making you feel and look better, helping you maximize
                    overall wellness with benefits typically lasting several
                    days.
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

      <div
        className="bg-[url('/images/group-3.png')] py-8"
        style={{
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
        }}
      >
        <ContentContainer>
          <div id="section-2" className="grid gap-y-8 text-center text-white">
            <h1 className="text-7xl drop-shadow-black">
              Group IV Therapy in The East Valley
            </h1>
            <div className="text-3xl drop-shadow-black">
              SCHEDULE YOUR PARTY&apos;S MOBILE IV TODAY!
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
        <div id="section-5">
          <h1 className="mb-2 text-center">Our Most Popular IV&apos;s</h1>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <IVOptionGridItem>
              <IVOption
                title="Desert Simply Dry (rehydrate)"
                price={110}
                imageSrc="/images/desert-simply-dry.png"
                imageAlt="desert-simply-dry"
                description="A quick relief at home with basic IV fluid, no additional vitamins or medicine."
                contents={["1 Liter of Normal saline"]}
              />
            </IVOptionGridItem>
            <IVOptionGridItem>
              <IVOption
                title="Desert Cold/Flu (Feeling under the weather)"
                price={165}
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
                price={175}
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
                price={195}
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
                title="Desert Beauty (For skin, nails & hair)"
                price={185}
                imageSrc="/images/desert-beauty.png"
                imageAlt="desert-beauty"
                description="Rejuvenate your skin and help combat signs of aging. Youthful restoration that focuses on hair, skin and nails."
                contents={[
                  "1 Liter of Normal Saline",
                  "B Complex (B1, B2, B3, B5, B6)",
                  "Biotin",
                  "Vitamin C",
                ]}
              />
            </IVOptionGridItem>
            <IVOptionGridItem>
              <IVOption
                title="Desert Myer's Cocktail (Wellness for all)"
                price={200}
                imageSrc="/images/desert-myers-cocktail.png"
                imageAlt="desert-myers-cocktail"
                description="Created by the late Dr. John Myers, this multivitamin cocktail is effective for acute asthma attacks, migraines, fatigue (including chronic fatigue syndrome), acute muscle spasms, colds, chronic sinusitis, seasonal allergies, chronic depression/anxiety and other disorders."
                contents={[
                  "1 Liter of Normal Saline",
                  "B Complex (B1, B2, B3, B5, B6)",
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
                title="Desert NAD+"
                price={{ min: 350, max: 950 }}
                // imageSrc="/images/desert-myers-cocktail.png"
                imageSrc="/images/desert-nad-plus-3.jpeg"
                imageAlt="desert-myers-cocktail"
                description="NAD+ stands for Nicotinamide Adenine Dinucleotide, and is a cofactor found in each living cell.  NAD+ IV therapy does take longer to receive than other IVs - from 45 minutes to 3 hours, depending on tolerance. During the drip you might feel a bit of discomfort compared to standard vitamin drips but this is completely normal, can be controlled by how fast you set the IV to drip, and stops within a minute or two after the drip ends."
                contents={[
                  "NAD+",
                  "1 Liter of Normal Saline",
                  "B Complex (B1, B2, B3, B5, B6)",
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
                title="Desert Weight Loss Option"
                price={"Consult with us for pricing."}
                imageSrc="/images/desert-weight-loss-option-4.jpeg"
                imageAlt="desert-myers-cocktail"
                description="Consult with us today if you're ready to get started with a weight management program."
                contents={[]}
              />
            </IVOptionGridItem>
          </div>
        </div>
      </ContentContainer>

      <ContentContainer>
        <div id="section-6">
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
              <h1>Desert Add On&apos;s</h1>
              <div>$30 - $50</div>
              <div className="gap-2">
                <li className="list-disc">Glutathione</li>
                <li className="list-disc">Vitamin C</li>
                <li className="list-disc">Zinc</li>
                <li className="list-disc">Magnesium</li>
                <li className="list-disc">Zofran - Anti-nausea </li>
                <li className="list-disc">
                  Toradol - Anti-inflammatory/Pain reliever
                </li>
                <li className="list-disc">
                  Pepcid - Antacid/Heartburn reliever
                </li>
                <li className="list-disc">Benadryl - Antihistamine</li>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>

      <div className="bg-primary">
        <ContentContainer>
          <div id="section-4">
            <div className="grid gap-y-8 text-center md:grid-cols-3">
              <div className="">
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
              <div className="">
                <h1>After Hours</h1>
                <div>
                  <div>After - Hours $100 - $300</div>
                  <div>Extra $100 - 8 PM - Midnight</div>
                  <div>Extra $300 - Midnight - 8 AM</div>
                  <div>
                    *Subject to availability - additional fees (collected prior
                    to the call)
                  </div>
                </div>
              </div>
              <div className="">
                <h1>Across the Valley</h1>
                <div>
                  <div>
                    An additional mileage charges may apply for clients greater
                    than 25mi from South Gilbert.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContentContainer>
      </div>

      <div className="bg-primary">
        <div
          className="bg-[url('/images/feel-good.png')] py-8"
          style={{
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
          }}
        >
          <ContentContainer>
            <div id="section-9" className="text-white drop-shadow-black">
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
        <div id="section-10">
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

          <div className="my-8 grid gap-4 text-center md:grid-cols-3">
            <div className="rounded-lg border-4 border-grey p-5 shadow-md">
              <div className="m-auto justify-self-center p-1">
                <div className="relative m-auto flex h-12 w-12 items-center justify-center rounded-full bg-grey p-8 text-center">
                  <FontAwesomeIcon icon={faClock} color="black" size="2xl" />
                </div>
                <div className="mt-2">
                  <div>Hours of Operation</div>
                  <div>By Appointment</div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border-4 border-grey p-5 shadow-md">
              <div className="m-auto justify-self-center p-1">
                <div className="relative m-auto flex h-12 w-12 items-center justify-center rounded-full bg-grey p-8 text-center">
                  <FontAwesomeIcon icon={faEnvelope} color="black" size="2xl" />
                </div>
                <div className="mt-2">
                  <div>Email</div>
                  <div>
                    <a
                      className="underline"
                      href="mailto:DesertIVSolutions@gmail.com"
                    >
                      DesertIVSolutions@gmail.com
                    </a>
                  </div>
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
                  <div>
                    <a className="underline" href="tel:4807903045">
                      (480) 790-3045
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </ContentContainer>

      <div className="bg-gray-300">
        <ContentContainer>
          <div id="section-11" className="grid gap-y-8">
            <div>
              <h2>We Accept The Following Payments</h2>
              <div>
                We accept Venmo, Zelle, PayPal, all major credit cards, and
                cash. Our services are also HSA (Health Savings Account)
                approved!
              </div>
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
          </div>
        </ContentContainer>
      </div>

      <ContentContainer>
        <div className="grid gap-y-8">
          <div className="">
            <h3>DISCLAIMER</h3>
            <div>
              If you think you may have a medical emergency, immediately call
              your doctor or dial 911.
            </div>
            <div>
              This website does not provide medical advice. It is intended for
              informational purposes only. It is not a substitute for
              professional medical advice, diagnosis or treatment. Never ignore
              professional medical advice in seeking treatment because of
              something you read on the internet. These statements have not been
              evaluated by the Food and Drug Administration.
            </div>
          </div>

          <div className="">
            <div>Serving the East Valley</div>
            <div>
              Mesa, Tempe, Chandler, Gilbert, Ahwatukee, Queen Creek, San Tan
              Valley
            </div>
          </div>
        </div>
      </ContentContainer>

      <Footer {...homeSsp} />
    </main>
  );
}

type IVOptionGridItem = {
  children: ReactNode;
};
function IVOptionGridItem({ children }: IVOptionGridItem) {
  return <div className="w-full justify-self-center p-1">{children}</div>;
}

interface PriceRange {
  min: number;
  max: number;
}

type IVOptionPropsPrice = string | number | PriceRange;

type IVOptionProps = {
  title: string;
  price: IVOptionPropsPrice;
  imageSrc: string;
  imageAlt: string;
  description: string;
  contents: string[];
};

function formatPrice(price: IVOptionPropsPrice): string {
  if (typeof price === "string") {
    return price;
  }

  if (typeof price === "number") {
    return `$${price}`;
  }

  return `$${price.min} - $${price.max}`;
}

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
        <div className="m-2 text-center font-bold">{formatPrice(price)}</div>
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

function Footer({ year }: HomeSsp) {
  return (
    <div className="bg-primary">
      <ContentContainer>
        <div className="grid gap-y-4">
          <div className="flex justify-center">
            <Image
              src="/images/color-logo-no-bg.png"
              width={200}
              height={200}
              alt="color-logo-no-bg"
            />
          </div>
          <h3 className="text-center">
            Desert IV Solutions - {year} - All Rights Reserved
          </h3>
        </div>
      </ContentContainer>
    </div>
  );
}

type ContentContainerProps = {
  children: ReactNode;
  disableYPadding?: boolean;
};
function ContentContainer({
  children,
  disableYPadding,
}: ContentContainerProps) {
  return (
    <div
      className={`container mx-auto px-4 ${
        disableYPadding === true ? "" : "my-10 py-10"
      }`}
    >
      {children}
    </div>
  );
}

type FormEntry = {
  name: string;
  phoneNumber: string;
  email: string;
  address: string;
  message: string;
};

const initialValues: FormEntry = {
  name: "",
  phoneNumber: "",
  email: "",
  address: "",
  message: "",
};

type FormStatus = "NONE" | "SUCCESS" | "ERROR";
const initialStatus: FormStatus = "NONE";

const contactFormValidation = Yup.object({
  name: Yup.string().required("Name is required."),
  phoneNumber: Yup.string().required("Phone number is required."),
  email: Yup.string()
    .email("Please provide a valid email address.")
    .required("Email is required."),
  message: Yup.string().required("Message is required."),
});

type FormErrorProps = {
  message: string;
};
function FormError({ message }: FormErrorProps) {
  return (
    <div
      className="relative mt-3 rounded border border-red-400 bg-red-100 px-4 py-2 text-red-700"
      role="alert"
    >
      <span className="block sm:inline">{message}</span>
    </div>
  );
}

type FormikErrorProps = {
  name: string;
};
function FormikError({ name }: FormikErrorProps) {
  return (
    <ErrorMessage name={name}>
      {(message) => <FormError message={message} />}
    </ErrorMessage>
  );
}

function ContactForm() {
  const formspreeSubmit = useForm(process.env.NEXT_PUBLIC_FORM!)[1];

  async function handleSubmit(
    values: FormEntry,
    formikHelpers: FormikHelpers<FormEntry>
  ) {
    try {
      formikHelpers.setStatus("NONE");
      formspreeSubmit({
        Name: values.name,
        "Phone Number": values.phoneNumber,
        Email: values.email,
        Address: values.address,
        Message: values.message,
      });
      formikHelpers.setStatus("SUCCESS");
    } catch (e) {
      formikHelpers.setStatus("ERROR");
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactFormValidation}
      onSubmit={handleSubmit}
      initialStatus={initialStatus}
    >
      {(formik) => (
        <form
          onSubmit={formik.handleSubmit}
          className="grid gap-4 rounded bg-white p-8 shadow-md"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              placeholder="Name"
              {...formik.getFieldProps("name")}
            />
            <FormikError name="name" />
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Phone Number
            </label>
            <input
              id="phoneNumber"
              type="text"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              placeholder="Phone Number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
            />
            <FormikError name="phoneNumber" />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              placeholder="example@mail.com"
              {...formik.getFieldProps("email")}
            />
            <FormikError name="email" />
          </div>

          <div>
            <label
              htmlFor="address"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Address
            </label>
            <textarea
              id="address"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              placeholder="Optional"
              rows={3}
              {...formik.getFieldProps("address")}
            />
            <FormikError name="address" />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              placeholder=""
              rows={3}
              {...formik.getFieldProps("message")}
            />
            <FormikError name="message" />
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="focus:shadow-outline rounded bg-primary px-4 py-2 font-bold text-white focus:outline-none"
          >
            Submit
          </button>

          {formik.status === "SUCCESS" && (
            <div
              className="relative mt-3 rounded border border-green-400 bg-green-100 px-4 py-2 text-green-700"
              role="alert"
            >
              <span className="block sm:inline">
                Thank you! We have received your message and will get back to
                you as soon as we can.
              </span>
              <span
                className="absolute bottom-0 right-0 top-0 px-4 py-2"
                onClick={() => formik.setStatus("NONE")}
              >
                <svg
                  className="h-6 w-6 fill-current text-green-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )}

          {formik.status === "ERROR" && (
            <div
              className="relative mt-3 rounded border border-red-400 bg-red-100 px-4 py-2 text-red-700"
              role="alert"
            >
              <span className="block sm:inline">
                An unexpected error occurred. Please try again or reach out to
                us at desertIVsolutions@gmail.com
              </span>
              <span
                className="absolute bottom-0 right-0 top-0 px-4 py-2"
                onClick={() => formik.setStatus("NONE")}
              >
                <svg
                  className="h-6 w-6 fill-current text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )}
        </form>
      )}
    </Formik>
  );
}
