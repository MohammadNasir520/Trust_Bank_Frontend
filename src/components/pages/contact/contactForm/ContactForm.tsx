import Input from "@/components/UI/AuthUI/input/Input";
import TextArea from "@/components/UI/AuthUI/textArea/TextArea";
import Button from "@/components/Common/Button";

const ContactForm = () => {
  return (
    <div className="my-8 p-8 border rounded-md shadow-md">
      <div className="text-lg lg:text-2xl font-bold text-center tracking-wide mb-1">
        Contact with us as an emergency service
      </div>
      <form className="my-2">
        <Input id="name" label="Name" type="name" />
        <Input id="email" label="Email" type="email" />
        <TextArea id="message" label="Message" type="text" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default ContactForm;
