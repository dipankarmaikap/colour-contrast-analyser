import Background from "@components/background/Background";
import Foreground from "@components/foreground/Foreground";
import Layout from "@components/Layout";
import Preview from "@components/preview/Preview";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="max-w-lg bg-white mx-auto">
          <Foreground />
          <Background />
          <Preview />
        </div>
      </Layout>
    </>
  );
}
