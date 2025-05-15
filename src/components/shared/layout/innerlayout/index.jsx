import React , { useState , useEffect}from "react";
import { Layout, theme } from "antd";
const { Content } = Layout;
import InnerSideBar from "@/components/shared/layout/innerlayout/innersidebar";
import InnerHeader from "@/components/shared/layout/innerlayout/innerheader";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const InnerLayout = ({ children , className ,headerButtons}) => {
  const location = useLocation();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleDrawerOpen = () => setDrawerVisible(true);
  const handleDrawerClose = () => setDrawerVisible(false);

  return (
    <Layout>
      <InnerSideBar visible={drawerVisible} onClose={handleDrawerClose} />
      <Layout
         style={{
          marginInlineStart: windowWidth > 1199 ? 200 : 0,
        }}
        className={className}
      >
        <InnerHeader   headerButtons={headerButtons}
          onDrawerOpen={handleDrawerOpen}
          isMobile={windowWidth <= 1199}/>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname} // Required for re-triggering animation (replace with your own unique key if not routing)
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{
                borderRadius: borderRadiusLG,
              }}
            >
                <div className="container">
                {children}
                </div>
            </motion.div>
          </AnimatePresence>
        </Content>
      </Layout>
    </Layout>
  );
};

export default InnerLayout;
