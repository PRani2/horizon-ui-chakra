// Chakra imports
// Chakra imports
import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
// Custom icons
import React, { useState } from "react";

export default function Default(props) {
  const {
    startContent,
    endContent,
    name,
    growth,
    value,
    backgroundColor,
    clickOnCategoryBox,
    id,
  } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "secondaryGray.600";

  return (
    <Card py="15px">
      <Flex
        onClick={() => {
          clickOnCategoryBox(id);
        }}
        my="auto"
        h="100%"
        backgroundColor={backgroundColor}
        align={{ base: "center", xl: "start" }}
        justify={{ base: "center", xl: "center" }}
      >
        {startContent}

        <Stat my="auto" ms={startContent ? "18px" : "0px"}>
          <StatLabel
            lineHeight="100%"
            color={textColor}
            fontSize={{
              base: "2xl",
            }}
          >
            {name}
          </StatLabel>
          <StatNumber
            color={textColorSecondary}
            fontSize={{
              base: "2xl",
            }}
          >
            Total Reivew : {value}
          </StatNumber>
          {growth ? (
            <Flex align="center">
              <Text color="green.500" fontSize="xs" fontWeight="700" me="5px">
                {growth}
              </Text>
              <Text color="secondaryGray.600" fontSize="xs" fontWeight="400">
                since last month
              </Text>
            </Flex>
          ) : null}
        </Stat>
        <Flex ms="auto" w="max-content">
          {endContent}
        </Flex>
      </Flex>
    </Card>
  );
}
