import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { useState } from "react"

export default function ViewTransactionModal({ isOpen, onOpen, onClose }: any) {


    return (
        <>

            <Modal onClose={onClose} size={'xl'} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent className="bg-red-500">
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody >
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita dignissimos aliquam laudantium nulla temporibus possimus harum nostrum alias porro ratione.</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}