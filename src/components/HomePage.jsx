import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
  Subheading,
  DisplayText,
} from "@shopify/polaris";



export function HomePage() {
  return (
    <Page fullWidth>
        <Stack>
          <Stack.Item>
            <Card>
               <Card.Header title={"Seller Mail"}>
                 
               </Card.Header>
               <Card.Section>
                 <Stack vertical={true} >
                      <Link >
                          <Heading>DashBoard</Heading>
                      </Link>
                      <Link>
                          <Heading>Pop-up builder</Heading>
                      </Link>
                      <Link>
                          <Heading>
                              Email builder
                          </Heading>
                      </Link>
                      <Link>
                          <Heading>
                              Email List
                          </Heading>
                      </Link>

                      <Link>
                          <Heading>
                              Email Sender
                          </Heading>
                      </Link>

                      <Link>
                          <Heading>
                                Settings
                          </Heading>
                      </Link>
                 </Stack>
               </Card.Section>
            </Card>
            </Stack.Item>
            
            <Stack.Item fill>
            <Layout>
              <Layout.Section>
                <DisplayText>
                  DashBoard
                </DisplayText>
                  <Stack >
                    <Stack.Item>
                      <Card sectioned>
                          <Card.Section>
                            <Stack vertical>
                            <DisplayText size="large">
                                Pop-up Views
                             </DisplayText>
                             <span className="text-center w-f">
                             <DisplayText size="large" >
                                 56
                             </DisplayText>
                             </span>
                            </Stack> 
                          </Card.Section>
                      </Card>
                      </Stack.Item>
                      <Stack.Item >
                      <Card sectioned>
                          <Card.Section>
                            <Stack vertical>
                            <DisplayText size="large">
                               Email Gathered
                             </DisplayText>
                             <span className="text-center w-f">
                             <DisplayText size="large" >
                                 56
                             </DisplayText>
                             </span>
                            </Stack> 
                          </Card.Section>
                      </Card>
                      </Stack.Item>
                  </Stack>
              </Layout.Section>

              <Layout.Section >
                    <Heading>
                      FAQ
                    </Heading>

                  

                    <Card>
                        <Card.Section>
                            <Heading>
                                Most Asked Question
                            </Heading>
                        </Card.Section>
                    </Card>
              </Layout.Section>
            </Layout>
            </Stack.Item>
        </Stack>
    </Page>
  );
}
