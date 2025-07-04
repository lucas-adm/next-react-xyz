'use client';

import { Element } from "./elements";
import { Form } from "@/components/forms";
import { Header } from "../../../Header";

const Page = () => {

    const { Warnings, Card } = Element;

    return (
        <section>
            <Header goBack="/settings/account" title="Deletar conta" />
            <section className="mt-6 flex flex-col gap-3">
                <h3 className="px-2 py-3">Confirme sua autoridade</h3>
                <Form.User.Delete />
                <Warnings />
                <Card />
            </section>
        </section>
    )

}

export default Page;