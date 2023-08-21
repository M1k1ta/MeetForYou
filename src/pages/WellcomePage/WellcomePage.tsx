import { FC } from "react";
import { Bird } from "../../components/Bird";
import { BackgroundPeople } from "../../components/BackgroundPeople";
import { BackgroundTree } from "../../components/BackgroundTree";
import { Form } from "../../components/Form";
import { BackgroundLine } from "../../components/BackgroundLine";
import { Hearts } from "../../components/Hearts";

export const WellcomePage: FC = () => {
  return (
    <main className="main">
      <div className="background">
        <Hearts />
        <BackgroundLine />
        <BackgroundTree />
        <BackgroundPeople />
      </div>

      <section className="wellcome">
        <div className="wellcome__title">
          <h1 className="wellcome__h1">
            Побачення Для вас
          </h1>

          <span className="wellcome__bird">
            <Bird />
          </span>
        </div>

        <p className="wellcome__text">
          Ми - ваш провідник у світі мистецтва знайомств та романтики!
          Наша мета - допомогти вам знайти вашу супутницю чи супутника життя,
          з ким ви зможете поділитися радістю, сміхом та миттєвостями,
          або збудувати міцний, довгостроковий зв'язок,
          що зігріє ваші серця протягом усього життя.
          У цьому вам допоможуть професійні свахи.
        </p>

        <Form />
      </section>
    </main>
  );
}